const ACCESS_CODE = process.env.ACCESS_CODE || "Admin123";

export default function validateAccessCode(req, res, next) {
  const code = req.headers["x-access-code"];
  if (code !== ACCESS_CODE) {
    return res.status(422).json({ message: "Kode akses salah" });
  }
  next();
}
