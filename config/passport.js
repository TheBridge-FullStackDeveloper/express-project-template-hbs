const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const prisma = require("../prisma");
const bcrypt = require("bcrypt");

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email', // Por defecto passport usa username y password, con esto le decimos que use email y password
      passwordField: 'password' // Estos calores son los nombres de los valores del form de login o register
    },
    async (email, password, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { email: email },
        });
        if (!user) {
          return done(null, false, { message: "Usuario no encontrado" });
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false, { message: "Contraseña incorrecta" });
        }
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Con esta linea podemos decir a passport con que propriedad puede reconocer al usuario
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Con esta configuración podemos decir a passport que datos del usuario quiero en req.user
passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
