import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed the database with initial data
   await prisma.markets.createMany({
        data: [
            {name: "Bitcoin", sym: "BTC", mCap: "1.1T", vol: "1.6M", change: "-1.73%", price: 57151.9, icon: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=48&q=95"},
            {name: "Ethereum", sym: "ETH", mCap: "370.6B", vol: "264.3k", change: "-1.73%", price: 57151.9, icon: "https://backpack.exchange/_next/image?url=%2Fcoins%2Feth.png&w=48&q=95"},
            {name: "Tether", sym: "USDT", mCap: "112.3B", vol: "80.3k", change: "-1.73%", price: 57151.9, icon: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fusdt.png&w=48&q=95"},
            {name: "Solana", sym: "SOL", mCap: "62.9B", vol: "6.9M", change: "-1.73%", price: 57151.9, icon: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fsol.png&w=48&q=95"},
        ]
    })
        
    console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
