"use client";

import React, { useState } from "react";
import { 
  Phone, MessageCircle, Heart, Search, ChevronRight, X, Clock, Sparkles, Star, Send, CheckCircle2
} from "lucide-react";

const categoriesData = {
  salud: {
    title: "Profesionales y Servicios de la Salud / Bienestar",
    emoji: "🩺 💖 🌸",
    bgColor: "bg-rose-50/80",
    borderColor: "border-rose-200/90 hover:border-rose-300",
    description: "Médicos, odontología y enfermería al servicio de la comunidad.",
    subcategories: [
      { name: "Médicos", bg: "bg-sky-100/80", text: "text-sky-800" },
      { name: "Odontología", bg: "bg-rose-100/80", text: "text-rose-800" },
      { name: "Enfermería", bg: "bg-purple-100/80", text: "text-purple-800" }
    ],
    providers: [
      {
        name: "Médico Cirujano",
        subcategory: "Médicos",
        description: "Dr. Agustín Vieira • Villa 256",
        phone: "0414-8169973",
        whatsapp: "584148169973"
      },
      {
        name: "Médico Cirujano",
        subcategory: "Médicos",
        description: "Dra. Carmen Rasines",
        phone: "0414-7883884",
        whatsapp: "584147883884"
      },
      {
        name: "Odontólogo",
        subcategory: "Odontología",
        description: "Dra. Luz Marina • Villa 85",
        phone: "0412-1836394",
        whatsapp: "584121836394"
      },
      {
        name: "Servicio de Enfermería",
        subcategory: "Enfermería",
        description: "Carmen Sanabria",
        phone: "0424-8841495 / 0424-8841485",
        whatsapp: "584248841495"
      }
    ]
  },
  hogar: {
    title: "Oficios y Servicios para el Hogar",
    emoji: "🏠 🛠️ 🔧",
    bgColor: "bg-amber-50/80",
    borderColor: "border-amber-200/90 hover:border-amber-300",
    description: "Mantenimiento, reparación de electrodomésticos, productos de limpieza y servicios.",
    subcategories: [
      { name: "Reparaciones", bg: "bg-amber-100/80", text: "text-amber-800" },
      { name: "Limpieza", bg: "bg-sky-100/80", text: "text-sky-800" },
      { name: "Mascotas", bg: "bg-rose-100/80", text: "text-rose-800" },
      { name: "Electricidad/Plomería", bg: "bg-purple-100/80", text: "text-purple-800" }
    ],
    providers: [
      {
        name: "Reparación de Electrodomésticos",
        subcategory: "Reparaciones",
        description: "Servicio técnico especializado en electrodomésticos",
        phone: "0414-0976556",
        whatsapp: "584140976556"
      },
      {
        name: "Productos de Limpieza (Servicio Exprés)",
        subcategory: "Limpieza",
        description: "Despacho directo a domicilio • Villa 146",
        phone: "0416-0305873",
        whatsapp: "584160305873"
      },
      {
        name: "Peluquería Canina a Domicilio",
        subcategory: "Mascotas",
        description: "Kimberly Coneo",
        phone: "0412-9586674",
        whatsapp: "584129586674"
      },
      {
        name: "Servicios de Construcción y Electricidad",
        subcategory: "Electricidad/Plomería",
        description: "Asdrubal Medardo Delgado Lopez • Residencial y comercial, bombas, plomería e iluminación • Villa 319",
        phone: "0412-8652801",
        whatsapp: "584128652801"
      },
      {
        name: "Plomero de Emergencias",
        subcategory: "Electricidad/Plomería",
        description: "Jean",
        phone: "0424-8401746",
        whatsapp: "584248401746"
      },
      {
        name: "Mantenimiento Integral y Limpieza",
        subcategory: "Limpieza",
        description: "Jonathan Ensan (Multitodo) • Productos químicos, áreas comunes, pulido • Villa 181",
        phone: "0424-8907082",
        whatsapp: "584248907082"
      },
      {
        name: "Reparación de Electrodomésticos y Bombas",
        subcategory: "Reparaciones",
        description: "Noel Karkajian • Lavadoras, secadoras, aires acondicionados, TV y bombas de agua • Villa 422",
        phone: "0424-8632561",
        whatsapp: "584248632561"
      }
    ]
  },
  educacion_transporte: {
    title: "Educación, Transporte y Logística",
    emoji: "🎓 🚌 📚",
    bgColor: "bg-sky-50/80",
    borderColor: "border-sky-200/90 hover:border-sky-300",
    description: "Clases particulares, formación, idiomas y servicios de traslado.",
    subcategories: [
      { name: "Idiomas", bg: "bg-purple-100/80", text: "text-purple-800" },
      { name: "Cursos", bg: "bg-teal-100/80", text: "text-teal-800" },
      { name: "Educación", bg: "bg-blue-100/80", text: "text-blue-800" },
      { name: "Taxi", bg: "bg-rose-100/80", text: "text-rose-800" }
    ],
    providers: [
      {
        name: "Clases de Francés a Domicilio",
        subcategory: "Idiomas",
        description: "Gabriel Andersonn (Atención a niños, adolescentes y adultos) • Villa 258",
        phone: "0414-7862876",
        whatsapp: "584147862876"
      },
      {
        name: "Docente - Tareas Dirigidas",
        subcategory: "Educación",
        description: "Yobana Armas Molero • Villa 372",
        phone: "0424-8494149",
        whatsapp: "584248494149"
      },
      {
        name: "Servicio de Taxi",
        subcategory: "Taxi",
        description: "Noel Karkajian • Villa 422",
        phone: "0424-8632561",
        whatsapp: "584248632561"
      },
      {
        name: "Academia de Modelaje",
        subcategory: "Cursos",
        description: "Cursos y formación",
        phone: "0414-8137510",
        whatsapp: "584148137510"
      }
    ]
  },
  comercios: {
    title: "Empresas, Comercios y Emprendimientos",
    emoji: "🏪 🛍️ 🍰",
    bgColor: "bg-emerald-50/80",
    borderColor: "border-emerald-200/90 hover:border-emerald-300",
    description: "Repostería, ferreterías, farmacias, panaderías, artesanía y productos varios.",
    subcategories: [
      { name: "Repostería", bg: "bg-rose-100/80", text: "text-rose-800" },
      { name: "Ferreterías", bg: "bg-emerald-100/80", text: "text-emerald-800" },
      { name: "Farmacias", bg: "bg-sky-100/80", text: "text-sky-800" },
      { name: "Panadería", bg: "bg-amber-100/80", text: "text-amber-800" },
      { name: "Bisutería", bg: "bg-purple-100/80", text: "text-purple-800" },
      { name: "Artesanía", bg: "bg-teal-100/80", text: "text-teal-800" },
      { name: "Alimentos/Bodega", bg: "bg-indigo-100/80", text: "text-indigo-800" },
      { name: "Estética y Belleza", bg: "bg-pink-100/80", text: "text-pink-800" },
      { name: "Barbería", bg: "bg-slate-200/80", text: "text-slate-800" },
      { name: "Eventos", bg: "bg-fuchsia-100/80", text: "text-fuchsia-800" },
      { name: "Asesoría", bg: "bg-blue-100/80", text: "text-blue-800" }
    ],
    providers: [
      {
        name: "Farmacia Ahorro Salud 2",
        subcategory: "Farmacias",
        description: "Villa 24",
        phone: "0414-8222751",
        whatsapp: "584148222751"
      },
      {
        name: "Repostería (Especialidad Tortas)",
        subcategory: "Repostería",
        description: "Gabriela Alfaro",
        phone: "0412-8580745",
        whatsapp: "584128580745"
      },
      {
        name: "Bisutería y Accesorios",
        subcategory: "Bisutería",
        description: "Gabriela Alfaro",
        phone: "0412-8580745",
        whatsapp: "584128580745"
      },
      {
        name: "Repostería en General",
        subcategory: "Repostería",
        description: "Alejandra Hernández • Villa 14",
        phone: "0424-8536958",
        whatsapp: "584248536958"
      },
      {
        name: "Repostería, Tortas, Pasapalos y Pan de Jamón",
        subcategory: "Repostería",
        description: "Atención directa en Villa 442",
        phone: "0424-3764439",
        whatsapp: "584243764439"
      },
      {
        name: "Repostería Sweet Heaven (Mini-Donitas)",
        subcategory: "Repostería",
        description: "Mini-Donitas por encargo (Mínimo 12 unidades) • Villa 234",
        phone: "0414-0883440",
        whatsapp: "584140883440"
      },
      {
        name: "Ferretería Ferretodo",
        subcategory: "Ferreterías",
        description: "Artículos de ferretería general • Villa 389",
        phone: "0414-8100651",
        whatsapp: "584148100651"
      },
      {
        name: "Ferretería Liviana (Ferrepuerto HB, C.A.)",
        subcategory: "Ferreterías",
        description: "Jorge Habelrih • Plomería, electricidad, tanques de agua, bombas y pintura contra pedido",
        phone: "0424-8836483",
        whatsapp: "584248836483",
        details: "Contacto email: Ferrepuertohb@gmail.com"
      },
      {
        name: "Panadería Maria Auxiliadora",
        subcategory: "Panadería",
        description: "Panes y repostería",
        phone: "0414-0885672",
        whatsapp: "584140885672"
      },
      {
        name: "Venta de Hamacas y Artesanía",
        subcategory: "Artesanía",
        description: "Elena Kufati",
        phone: "0414-0976556",
        whatsapp: "584140976556"
      },
      {
        name: "Bodega 357 (Servicio Exprés)",
        subcategory: "Alimentos/Bodega",
        description: "Elias • Productos variados",
        phone: "0424-9966275",
        whatsapp: "584249966275"
      },
      {
        name: "Productos de Consumo del Hogar",
        subcategory: "Alimentos/Bodega",
        description: "Óscar Hernández • Villa 528",
        phone: "0424-8896326",
        whatsapp: "584248896326"
      },
      {
        name: "Estética Facial y Pestañas",
        subcategory: "Estética y Belleza",
        description: "Aglais • Limpieza facial, pestañas y cejas • Villa 185",
        phone: "0424-8304670",
        whatsapp: "584248304670"
      },
      {
        name: "Servicio de Barbería",
        subcategory: "Barbería",
        description: "Alexander Rojas",
        phone: "0424-8307896",
        whatsapp: "584248307896"
      },
      {
        name: "Servicio de Barbería",
        subcategory: "Barbería",
        description: "Dennison Rojas",
        phone: "0424-8146960",
        whatsapp: "584248146960"
      },
      {
        name: "Peinados para Niñas",
        subcategory: "Estética y Belleza",
        description: "Jeannette Karkajian • Servicio a domicilio • Villa 422",
        phone: "0424-882989",
        whatsapp: "58424882989"
      },
      {
        name: "Decoración de Eventos y Mobiliario",
        subcategory: "Eventos",
        description: "Jenifer Batman (@solyluna.decoracioness) • Piñatas, globos, centros de mesa • Villa 428",
        phone: "0414-8023938",
        whatsapp: "584148023938"
      },
      {
        name: "Joyería y Accesorios",
        subcategory: "Bisutería",
        description: "Jhonny Lee Molleda (@MV.DESING.VE) • Acero Inoxidable • Villa 300",
        phone: "0412-5423678",
        whatsapp: "584125423678"
      },
      {
        name: "Asesoría Inmobiliaria y Seguros",
        subcategory: "Asesoría",
        description: "Chadia Antar • Asesor inmobiliario certificada y asesor de seguros (auto, salud, servicios funerarios y fianzas) • Villa 658",
        phone: "0424-8735647",
        whatsapp: "584248735647"
      },
      {
        name: "Servicio de Peluquería a Domicilio",
        subcategory: "Estética y Belleza",
        description: "Chadia Antar • Villa 658",
        phone: "0424-8735647",
        whatsapp: "584248735647"
      }
    ]
  }
};

const emergencyContacts = [
  { name: "Emergencias Nacional 911", phone: "911", note: "Atención inmediata 24/7", emoji: "🚨" },
  { name: "Vigilancia Puerto Morro", phone: "0414-1849618", note: "Control de acceso a la urbanización", emoji: "👮" },
  { name: "Seguridad Ciudadana Urbaneja", phone: "0424-8013259", note: "Seguridad y cuadrantes Lechería", emoji: "🛡️" },
  { name: "Ambulancia PC Urbaneja", phone: "0424-8296177", note: "Protección Civil Lechería", emoji: "🚑" },
  { name: "Vevagas / Vedegas (Fugas)", phone: "0424-8594719", note: "Alt: 0424-8025026", emoji: "⛽" },
  { name: "PoliSotillo (Caribbean Mall)", phone: "0424-8784898", note: "Casilla de seguridad policial", emoji: "🚓" },
  { name: "Protección Civil Sotillo", phone: "0422-7447232", note: "Alt: 0422-7447231 / 0422-7447233", emoji: "🛟" },
  { name: "Condominio y Ambiente", phone: "0416-6811855", note: "Dirección de ambiente y gestión", emoji: "🌿" },
  { name: "Bomberos Lechería", phone: "0281-9923730", note: "Atención e incendios Urbaneja", emoji: "🚒" },
  { name: "Poliurbaneja", phone: "0412-0410410", note: "Policía Municipal de Urbaneja", emoji: "🚓" },
  { name: "Hospital Luis Razetti", phone: "0281-2676740", note: "Hospital Universitario", emoji: "🏥" },
  { name: "PCP Centro Médico Total", phone: "0424-8134507", note: "Prevención Lechería", emoji: "🩺" },
  { name: "CORPOELEC", phone: "0424-8784898", note: "Reporte de fallas eléctricas", emoji: "⚡" },
  { name: "Clínica Imasur", phone: "0424-8226703", note: "Servicio al cliente: 0412-5838136 • Emerg. Dr. Mendoza / Dra. Barrera 0412-9427444", emoji: "🏥" }
];

const condoContacts = [
 const condoContacts = [
  { name: "Oficina ASOPROPMO", role: "Atención General", phone: "0424-8612508", emoji: "🏢" }
];
];

export default function HomeDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategoryKey, setSelectedCategoryKey] = useState(null);

  const [suggestionMessage, setSuggestionMessage] = useState("");
  const [suggestionContact, setSuggestionContact] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showDemoSuccess, setShowDemoSuccess] = useState(false);
  
  const [showCondoContacts, setShowCondoContacts] = useState(false);

  const activeCategory = selectedCategoryKey ? categoriesData[selectedCategoryKey] : null;

  const handleSimulatedSubmit = (e) => {
    e.preventDefault();
    if (!suggestionMessage.trim()) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setShowDemoSuccess(true);
      setSuggestionMessage("");
      setSuggestionContact("");
      setTimeout(() => setShowDemoSuccess(false), 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0b132b] text-slate-800 font-sans antialiased selection:bg-rose-300 selection:text-rose-900">
      
      {/* 1. Cabecera */}
      <header 
        className="relative py-14 px-4 text-center overflow-hidden bg-cover bg-center bg-no-repeat shadow-lg"
        style={{ backgroundImage: "url('/residencia.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0b132b]/80 backdrop-blur-[2px] pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none opacity-40">
          <Star className="w-3 h-3 text-amber-200 absolute top-4 left-10 animate-pulse" />
          <Star className="w-4 h-4 text-amber-100 absolute top-12 right-20 animate-pulse" />
          <Star className="w-2 h-2 text-white absolute top-20 left-1/4" />
          <Star className="w-3 h-3 text-amber-200 absolute bottom-6 right-1/3 animate-pulse" />
          <Sparkles className="w-5 h-5 text-sky-200 absolute top-8 right-12 opacity-60" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 text-white/95 text-xs font-medium px-4 py-1.5 rounded-full backdrop-blur-md shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Directorio Comunitario Oficial</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif tracking-tight text-white drop-shadow-md flex items-center justify-center gap-3">
            <span className="text-amber-300 text-2xl sm:text-3xl">✦</span>
            <span>Puerto Morro</span>
            <span className="text-amber-300 text-2xl sm:text-3xl">✦</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-lg mx-auto font-light leading-relaxed drop-shadow-xs">
            Red de servicios, profesionales, comercios y números de atención de nuestra comunidad
          </p>
        </div>
      </header>

      {/* 2. Lienzo Principal */}
      <main className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-[#fffdf9] rounded-[2.5rem] p-6 sm:p-10 border-4 border-amber-100/60 shadow-2xl space-y-10 relative overflow-hidden -mt-6">
          
          <div className="absolute top-4 left-4 text-amber-300/40 text-xl pointer-events-none">🌿</div>
          <div className="absolute top-4 right-4 text-amber-300/40 text-xl pointer-events-none">🌿</div>
          <div className="absolute bottom-4 left-4 text-amber-300/40 text-xl pointer-events-none">🌸</div>
          <div className="absolute bottom-4 right-4 text-amber-300/40 text-xl pointer-events-none">🌸</div>

          {/* 3. Panel de Contactos de Emergencia */}
          <section className="bg-[#fff5f5]/80 border-2 border-rose-200 rounded-3xl p-6 shadow-xs relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 text-rose-700 font-serif font-bold text-xl mb-6 text-center">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />
              <h2>Contactos de Emergencia e Interés (Urbaneja y Sotillo)</h2>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-400" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {emergencyContacts.map((item, idx) => (
                <a 
                  key={idx} 
                  href={`tel:${item.phone.replace(/[^0-9+]/g, '')}`}
                  className="bg-white p-4 rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-md transition-all group flex flex-col items-center text-center justify-between space-y-3"
                >
                  <div className="text-3xl group-hover:scale-125 transition-transform">
                    {item.emoji}
                  </div>
                  <div>
                    <p className="font-serif font-bold text-slate-800 text-base group-hover:text-rose-600 transition">{item.name}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.note}</p>
                  </div>
                  <div className="flex items-center text-rose-600 font-extrabold text-xs gap-1.5 bg-rose-50/80 px-3 py-1.5 rounded-full border border-rose-100">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{item.phone}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* 4. Panel del Condominio ASOPROPMO (Desplegable) */}
          <section className="bg-slate-50 border-2 border-slate-200 rounded-3xl shadow-xs relative overflow-hidden transition-all duration-300">
            <button 
              onClick={() => setShowCondoContacts(!showCondoContacts)}
              className="w-full p-6 flex items-center justify-between text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏢</span>
                <h2 className="font-serif font-bold text-xl text-left">Directorio Administrativo y Condominio ASOPROPMO</h2>
              </div>
              <ChevronRight className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${showCondoContacts ? 'rotate-90' : ''}`} />
            </button>

            {/* Solo se renderiza si showCondoContacts es verdadero */}
            {showCondoContacts && (
              <div className="p-6 pt-0 border-t border-slate-200 mt-2 animate-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                  {condoContacts.map((item, idx) => (
                    <a 
                      key={idx} 
                      href={item.phone !== "N/A" ? `tel:${item.phone.replace(/[^0-9+]/g, '')}` : "#"}
                      className={`bg-white p-4 rounded-2xl border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all group flex flex-col items-center text-center justify-between space-y-3 ${item.phone === "N/A" ? "cursor-default" : ""}`}
                    >
                      <div className="text-3xl group-hover:scale-125 transition-transform">
                        {item.emoji}
                      </div>
                      <div>
                        <p className="font-serif font-bold text-slate-800 text-base group-hover:text-slate-600 transition">{item.name}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5 font-bold uppercase tracking-wider">{item.role}</p>
                      </div>
                      {item.phone !== "N/A" && (
                        <div className="flex items-center text-slate-600 font-extrabold text-xs gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                          <Phone className="w-3.5 h-3.5" />
                          <span>{item.phone}</span>
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* 5. Buscador */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-5 top-4 w-5 h-5 text-rose-300" />
            <input 
              type="text"
              placeholder="Buscar por servicio, profesión o palabra clave (ej. taxi, plomero, médico)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-13 pr-6 py-4 bg-white border-2 border-rose-200/80 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-sm placeholder:text-rose-300/80 text-slate-700 transition"
            />
          </div>

          {/* 6. Categorías Principales */}
          <section className="space-y-6">
            <div className="text-center space-y-1">
              <h2 className="text-2xl font-serif font-bold text-slate-800 flex items-center justify-center gap-2">
                <span className="text-emerald-500">🌿</span>
                <span>Categorías del Directorio</span>
                <span className="text-emerald-500">🌿</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {Object.entries(categoriesData).map(([key, cat]) => {
                const query = searchTerm.toLowerCase();
                const matchesSearch = searchTerm === "" || 
                  cat.title.toLowerCase().includes(query) ||
                  cat.subcategories.some(sub => sub.name.toLowerCase().includes(query)) ||
                  cat.providers.some(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));

                if (!matchesSearch) return null;

                return (
                  <div 
                    key={key}
                    onClick={() => setSelectedCategoryKey(key)}
                    className={`bg-white p-6 rounded-[2rem] border-2 ${cat.borderColor} hover:shadow-xl transition-all duration-300 cursor-pointer flex items-start gap-4 group relative overflow-hidden`}
                  >
                    <div className={`p-3.5 ${cat.bgColor} rounded-2xl group-hover:scale-110 transition-transform shrink-0 border border-white shadow-2xs text-2xl flex items-center justify-center`}>
                      {cat.emoji}
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif font-bold text-slate-800 group-hover:text-rose-600 transition text-base leading-snug">
                          {cat.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 group-hover:text-rose-500 transition shrink-0" />
                      </div>
                      
                      <p className="text-xs text-slate-500 leading-relaxed font-light">{cat.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {cat.subcategories.map((sub, i) => (
                          <span 
                            key={i} 
                            className={`text-[11px] font-medium px-3 py-1 rounded-full ${sub.bg} ${sub.text} border border-white shadow-2xs`}
                          >
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 7. Buzón de Sugerencias */}
          <section className="bg-gradient-to-br from-rose-50/60 via-amber-50/40 to-sky-50/50 border-2 border-rose-200/80 rounded-3xl p-6 sm:p-8 space-y-4 relative">
            <div className="text-center space-y-1">
              <span className="text-3xl">💌</span>
              <h3 className="font-serif font-bold text-xl text-slate-800">¿Tienes alguna sugerencia o nuevo contacto?</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto font-light">
                Ayúdanos a mantener actualizado el directorio de Puerto Morro. Escríbenos tu propuesta a continuación.
              </p>
            </div>

            <form onSubmit={handleSimulatedSubmit} className="max-w-xl mx-auto space-y-3 pt-2">
              <div>
                <input 
                  type="text"
                  placeholder="Tu nombre o casa/apartamento (Opcional)"
                  value={suggestionContact}
                  onChange={(e) => setSuggestionContact(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-rose-200/80 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300 placeholder:text-slate-400"
                />
              </div>

              <div>
                <textarea 
                  rows={3}
                  required
                  placeholder="Escribe aquí tu sugerencia, corrección o nuevo servicio que te gustaría agregar..."
                  value={suggestionMessage}
                  onChange={(e) => setSuggestionMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-rose-200/80 rounded-xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300 placeholder:text-slate-400 resize-none"
                />
              </div>

              {showDemoSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center gap-2 text-emerald-800 text-xs font-medium animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>¡Sugerencia recibida con éxito! (Simulación demo completada)</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={isSending}
                className="w-full py-3 px-6 bg-slate-800 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSending ? (
                  <span>Procesando...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Sugerencia a la Administración</span>
                  </>
                )}
              </button>
            </form>
          </section>

        </div>
      </main>

      {/* 8. Modal */}
      {activeCategory && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-[#fffdfa] w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 border-4 border-rose-100">
            
            <div className="flex items-center justify-between p-6 border-b border-rose-100 bg-rose-50/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-white rounded-2xl text-2xl shadow-2xs border border-rose-100">
                  {activeCategory.emoji}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-800">{activeCategory.title}</h3>
                  <p className="text-xs text-slate-500">Contactos disponibles en la comunidad</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCategoryKey(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-rose-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
              {activeCategory.providers.map((prov, i) => (
                <div key={i} className="p-5 rounded-2xl border-2 border-rose-100/70 bg-white shadow-2xs space-y-3">
                  <div>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100 mb-1">
                      {prov.subcategory}
                    </span>
                    <h4 className="font-serif font-bold text-slate-800 text-base">{prov.name}</h4>
                  </div>
                  
                  <p className="text-xs text-slate-600 leading-relaxed font-light">{prov.description}</p>
                  
                  {prov.schedule && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{prov.schedule}</span>
                    </div>
                  )}

                  {prov.details && (
                    <p className="text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200/60">
                      {prov.details}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {prov.whatsapp && (
                      <a 
                        href={`https://wa.me/${prov.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold py-2.5 px-3 rounded-full transition shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                    <a 
                      href={`tel:${prov.phone}`}
                      className="inline-flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-rose-500 text-white text-xs font-bold py-2.5 px-3 rounded-full transition shadow-xs"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Llamar</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-rose-50/50 border-t border-rose-100 text-center">
              <button 
                onClick={() => setSelectedCategoryKey(null)}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 transition"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pie de Página */}
      <footer className="py-6 text-center text-xs text-slate-400 font-light">
        <p>Directorio Comunitario de Puerto Morro • Con mucho cariño para los vecinos 🌸</p>
      </footer>
    </div>
  );
}