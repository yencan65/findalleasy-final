import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req,res)=> res.json({ ok: true }));

// Simple suggest endpoint mixing products + services
app.get('/api/suggest', (req,res)=>{
  const lang = (req.query.lang || 'en').slice(0,2);
  const suggestions = {
    tr: {
      products: ["Akıllı Saat", "Kablosuz Kulaklık", "Akıllı Telefon"],
      services: ["Otel", "Uçak Bileti", "Sigorta", "Restoran Rezervasyonu"]
    },
    en: {
      products: ["Smartwatch", "Wireless Headphones", "Smartphone"],
      services: ["Hotel", "Flight Ticket", "Insurance", "Restaurant Booking"]
    }
  };
  const data = suggestions[lang] || suggestions.en;
  res.json({ lang, ...data });
});

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log('API running on :' + port));
