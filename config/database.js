module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      // host: env('DATABASE_HOST', '109.234.162.216'),
      // port: env.int('DATABASE_PORT', 3306),
      // database: env('DATABASE_NAME', 'xmud6272_makkusabd5'),
      // user: env('DATABASE_USERNAME', 'xmud6272_ash'),
      // password: env('DATABASE_PASSWORD', 'Ez;2Fzc#Fq=Q'),
      // ssl: env.bool('DATABASE_SSL', false),
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL'),
    },
  },
});
