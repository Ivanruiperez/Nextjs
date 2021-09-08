// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      name: 'Sonia M.',
      body: 'Fue realmente fácil, en una semana vendí mi piso',
    },
  ]);
}
