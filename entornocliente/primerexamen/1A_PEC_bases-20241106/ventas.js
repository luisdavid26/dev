const ventas = {
  vendedores: ["Scooby-Doo", "Shaggy Rogers", "Vilma Dinkley", "Daphne Blake"],
  sucursales: ["Torrevieja", "Orihuela Costa"],
  detalle: [
    {
      fecha: new Date(2024, 1, 4),
      nombreVendedore: "Shaggy Rogers",
      componentesPC: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Torrevieja",
    },
    {
      fecha: new Date(2024, 0, 1),
      nombreVendedore: "Scooby-Doo",
      componentesPC: ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
      sucursal: "Torrevieja",
    },
    {
      fecha: new Date(2024, 0, 2),
      nombreVendedore: "Shaggy Rogers",
      componentesPC: ["Monitor ASC 543", "Motherboard MZI"],
      sucursal: "Torrevieja",
    },
    {
      fecha: new Date(2024, 2, 10), // 10 de marzo de 2024
      nombreVendedore: "Daphne Blake",
      componentesPC: ["Monitor LG Ultra", "Motherboard MSI Pro"],
      sucursal: "Orihuela Costa",
    },
    {
      fecha: new Date(2024, 2, 15), // 15 de marzo de 2024
      nombreVendedore: "Vilma Dinkley",
      componentesPC: ["Monitor Acer Predator", "Motherboard ASRock Phantom"],
      sucursal: "Torrevieja",
    },
    {
      fecha: new Date(2024, 3, 5), // 5 de abril de 2024
      nombreVendedore: "Scooby-Doo",
      componentesPC: ["HDD Seagate 1TB", "RAM Corsair 16GB"],
      sucursal: "Orihuela Costa",
    },
    {
      fecha: new Date(2024, 3, 20), // 20 de abril de 2024
      nombreVendedore: "Shaggy Rogers",
      componentesPC: ["Monitor Samsung Curved", "Motherboard Gigabyte Ultra"],
      sucursal: "Torrevieja",
    },
    {
      fecha: new Date(2024, 4, 10), // 10 de mayo de 2024
      nombreVendedore: "Daphne Blake",
      componentesPC: ["Monitor Dell 24\"", "Motherboard ASUS ROG"],
      sucursal: "Orihuela Costa",
    },
    {
      fecha: new Date(2024, 5, 15), // 15 de junio de 2024
      nombreVendedore: "Vilma Dinkley",
      componentesPC: ["Monitor HP Elite", "Motherboard Biostar Racing"],
      sucursal: "Torrevieja",
    },
    {
      fecha: new Date(2024, 6, 20), // 20 de julio de 2024
      nombreVendedore: "Scooby-Doo",
      componentesPC: ["Monitor Acer Nitro", "Motherboard MSI Gaming"],
      sucursal: "Orihuela Costa",
    },
    
  ],
  precios: [
    { componente: "Monitor GPRS 3000", precio: 220 },
    { componente: "Motherboard ASUS 1500", precio: 130 },
    { componente: "Monitor ASC 543", precio: 270 },
    { componente: "Motherboard ASUS 1200", precio: 115 },
    { componente: "Motherboard MZI", precio: 35 },
    { componente: "HDD Toyiva", precio: 95 },
    { componente: "HDD Wezter Dishital", precio: 85 },
    { componente: "RAM Quinston", precio: 125 },
    { componente: "RAM Quinston Fury", precio: 245 },
    // Componentes nuevos:
    { componente: "HDD Seagate 1TB", precio: 150 },
    { componente: "RAM Corsair 16GB", precio: 140 },
    { componente: "Monitor Samsung Curved", precio: 300 },
    { componente: "Motherboard Gigabyte Ultra", precio: 200 },
    { componente: "Monitor LG Ultra", precio: 280 },
    { componente: "Motherboard MSI Pro", precio: 160 },
    { componente: "Monitor Acer Predator", precio: 320 },
    { componente: "Motherboard ASRock Phantom", precio: 180 },
    { componente: "Monitor Dell 24\"", precio: 250 },
    { componente: "Motherboard ASUS ROG", precio: 210 },
    { componente: "Monitor HP Elite", precio: 260 },
    { componente: "Motherboard Biostar Racing", precio: 140 },
    { componente: "Monitor Acer Nitro", precio: 270 },
    { componente: "Motherboard MSI Gaming", precio: 190 },
  ],
  
};
//Monitor ASC 543,Motherboard ASUS 1200,HDD Toyiva