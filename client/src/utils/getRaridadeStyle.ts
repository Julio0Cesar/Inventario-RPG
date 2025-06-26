export const getRaridadeStyleListar = (raridade: string) => {
  switch (raridade?.toLowerCase()) {
    case "comum":
      return "border-gray-400 bg-[rgba(160,160,160,0.151)]";
    case "incomum":
      return "border-green-400 bg-[rgba(50,128,50,0.150)]";
    case "raro":
      return "border-blue-400 bg-[rgba(93,93,255,0.151)]";
    case "epico":
      return "border-yellow-400 bg-[rgba(255,255,93,0.151)]";
    default:
      return "border-white bg-transparent";
  }
}
export const getRaridadeStyleDescrever = (raridade: string) => {
  switch (raridade?.toLowerCase()) {
    case "comum":
      return "dark:to-[rgba(20,20,20,1)] to-[rgba(200,200,200,1)]";
    case "incomum":
      return "dark:!to-[#064200] to-[#5eff5e]";
    case "raro":
      return "dark:to-[#001244] to-[#9db7ff]";
    case "muito raro":
      return "dark:to-[#3e0f2b] to-[#ff4d65]";
    case "lendario":
      return "dark:to-[#4d2b00] to-[#ffb24d]";
    default:
      return "";
  }
}