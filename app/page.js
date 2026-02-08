'use client'
import { useState } from 'react'

const palettes = [
  {
    name: "Energia Solare",
    colors: [
      { hex: "#FFD6E8", name: "Rosa Pesca", type: "warm" },
      { hex: "#FFEAA7", name: "Giallo Limone", type: "warm" },
      { hex: "#B4E7CE", name: "Menta Fresca", type: "cool" },
      { hex: "#C7CEEA", name: "Lavanda Cielo", type: "cool" },
      { hex: "#FFB6B9", name: "Corallo Delicato", type: "warm" },
      { hex: "#FF6B9D", name: "Fucsia Vibrante", type: "contrast" }
    ],
    prompt: "Crea una palette ispirata all'energia del sole mattutino: rosa pesca delicato #FFD6E8, giallo limone pastello #FFEAA7, menta fresca #B4E7CE, lavanda cielo #C7CEEA, corallo morbido #FFB6B9, con un fucsia vibrante #FF6B9D come punto focale. Mix bilanciato di caldi e freddi, energia positiva e leggerezza moderna."
  },
  {
    name: "Giardino Incantato",
    colors: [
      { hex: "#B8E6D5", name: "Verde Acqua", type: "cool" },
      { hex: "#FFE5B4", name: "Albicocca Chiara", type: "warm" },
      { hex: "#E0BBE4", name: "Lilla Sogno", type: "cool" },
      { hex: "#FFD4B2", name: "Pesca Matura", type: "warm" },
      { hex: "#A8E6CF", name: "Giada Pastello", type: "cool" },
      { hex: "#8B5FBF", name: "Viola Intenso", type: "contrast" }
    ],
    prompt: "Palette da giardino incantato: verde acqua tenue #B8E6D5, albicocca chiara #FFE5B4, lilla sognante #E0BBE4, pesca matura #FFD4B2, giada pastello #A8E6CF, con viola intenso #8B5FBF per contrasto deciso. Equilibrio perfetto tra tonalità calde e fredde, allegria sofisticata e originalità distintiva."
  },
  {
    name: "Aurora Boreale",
    colors: [
      { hex: "#C5E3F6", name: "Azzurro Cristallo", type: "cool" },
      { hex: "#FFE1E9", name: "Rosa Nuvola", type: "warm" },
      { hex: "#D4F1F4", name: "Turchese Ghiaccio", type: "cool" },
      { hex: "#FFCCD5", name: "Salmone Baby", type: "warm" },
      { hex: "#B5EAD7", name: "Verde Aurora", type: "cool" },
      { hex: "#FF4757", name: "Rosso Corallo", type: "contrast" }
    ],
    prompt: "Ispirazione aurora boreale moderna: azzurro cristallo #C5E3F6, rosa nuvola #FFE1E9, turchese ghiaccio #D4F1F4, salmone baby #FFCCD5, verde aurora #B5EAD7, con rosso corallo vivace #FF4757 come elemento distintivo. Palette che trasmette meraviglia, freschezza e energia creativa contemporanea."
  },
  {
    name: "Dolce Risveglio",
    colors: [
      { hex: "#FFE4C4", name: "Biscotto Miele", type: "warm" },
      { hex: "#E8F6F3", name: "Acquamarina Soft", type: "cool" },
      { hex: "#FED9ED", name: "Rosa Zucchero", type: "warm" },
      { hex: "#D5E8F7", name: "Cielo Mattutino", type: "cool" },
      { hex: "#FFF0DB", name: "Vaniglia Cremosa", type: "warm" },
      { hex: "#FF8C94", name: "Ciliegia Pop", type: "contrast" }
    ],
    prompt: "Palette dolce risveglio: biscotto miele #FFE4C4, acquamarina soft #E8F6F3, rosa zucchero #FED9ED, cielo mattutino #D5E8F7, vaniglia cremosa #FFF0DB, con ciliegia pop #FF8C94 per dinamismo visivo. Colori che evocano gioia, ottimismo e creatività fresca con identità unica."
  },
  {
    name: "Cocktail Tropicale",
    colors: [
      { hex: "#FFF4A3", name: "Ananas Chiaro", type: "warm" },
      { hex: "#CAFFBF", name: "Lime Pastello", type: "cool" },
      { hex: "#FFCBF2", name: "Fragola Gelato", type: "cool" },
      { hex: "#FFE8CC", name: "Mango Velluto", type: "warm" },
      { hex: "#9BF6FF", name: "Cocco Acqua", type: "cool" },
      { hex: "#FF6B35", name: "Arancio Tropicale", type: "contrast" }
    ],
    prompt: "Mix tropicale vibrante: ananas chiaro #FFF4A3, lime pastello #CAFFBF, fragola gelato #FFCBF2, mango velluto #FFE8CC, cocco acqua #9BF6FF, con arancio tropicale brillante #FF6B35 come accento deciso. Palette gioiosa ed esuberante, perfetta per progetti creativi innovativi e presentazioni memorabili."
  },
  {
    name: "Metropolitana Chic",
    colors: [
      { hex: "#E5E4E2", name: "Grigio Perla", type: "cool" },
      { hex: "#FFE5CC", name: "Beige Caldo", type: "warm" },
      { hex: "#D8E2DC", name: "Salvia Chiaro", type: "cool" },
      { hex: "#FFDDC1", name: "Pesca Urbana", type: "warm" },
      { hex: "#C9E4DE", name: "Eucalipto Soft", type: "cool" },
      { hex: "#E63946", name: "Rosso Statement", type: "contrast" }
    ],
    prompt: "Stile metropolitano sofisticato: grigio perla #E5E4E2, beige caldo #FFE5CC, salvia chiaro #D8E2DC, pesca urbana #FFDDC1, eucalipto soft #C9E4DE, con rosso statement #E63946 per impatto visivo. Equilibrio raffinato tra neutri caldi e freddi, eleganza contemporanea con carattere distintivo per presentazioni professionali creative."
  }
]

export default function Home() {
  const [selectedPalette, setSelectedPalette] = useState(0)
  const [copiedColor, setCopiedColor] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(index)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const currentPalette = palettes[selectedPalette]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '50px',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '16px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            ✨ Palette Pastello Vivaci
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.95,
            fontWeight: '300'
          }}>
            Colori pastello con energia, creatività e personalità distintiva
          </p>
        </div>

        {/* Palette Selector */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {palettes.map((palette, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPalette(idx)}
              style={{
                padding: '12px 24px',
                borderRadius: '25px',
                border: 'none',
                background: selectedPalette === idx ? 'white' : 'rgba(255,255,255,0.2)',
                color: selectedPalette === idx ? '#667eea' : 'white',
                fontWeight: '600',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)',
                boxShadow: selectedPalette === idx ? '0 4px 15px rgba(0,0,0,0.2)' : 'none'
              }}
            >
              {palette.name}
            </button>
          ))}
        </div>

        {/* Color Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {currentPalette.colors.map((color, idx) => (
            <div
              key={idx}
              onClick={() => copyToClipboard(color.hex, idx)}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                transition: 'transform 0.3s, box-shadow 0.3s',
                transform: copiedColor === idx ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <div style={{
                height: '150px',
                background: color.hex,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {color.type === 'contrast' && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    background: 'rgba(0,0,0,0.6)',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '600'
                  }}>
                    CONTRASTO
                  </div>
                )}
                {copiedColor === idx && (
                  <div style={{
                    background: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    ✓ Copiato!
                  </div>
                )}
              </div>
              <div style={{
                padding: '20px'
              }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#2d3748',
                  marginBottom: '8px'
                }}>
                  {color.name}
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#667eea',
                  fontFamily: 'monospace'
                }}>
                  {color.hex}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#718096',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  fontWeight: '500'
                }}>
                  {color.type === 'warm' ? '🔥 Caldo' : color.type === 'cool' ? '❄️ Freddo' : '⚡ Accento'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prompt Section */}
        <div style={{
          background: 'white',
          borderRadius: '24px',
          padding: '32px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#2d3748',
              margin: 0
            }}>
              💡 Prompt Creativo
            </h2>
            <button
              onClick={() => setShowPrompt(!showPrompt)}
              style={{
                padding: '10px 20px',
                borderRadius: '15px',
                border: 'none',
                background: '#667eea',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {showPrompt ? 'Nascondi' : 'Mostra'}
            </button>
          </div>

          {showPrompt && (
            <>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4a5568',
                background: '#f7fafc',
                padding: '24px',
                borderRadius: '16px',
                borderLeft: '4px solid #667eea',
                fontStyle: 'italic'
              }}>
                {currentPalette.prompt}
              </p>
              <button
                onClick={() => {
                  copyToClipboard(currentPalette.prompt, 'prompt')
                  setCopiedColor('prompt')
                }}
                style={{
                  marginTop: '16px',
                  padding: '12px 28px',
                  borderRadius: '15px',
                  border: 'none',
                  background: copiedColor === 'prompt' ? '#48bb78' : '#764ba2',
                  color: 'white',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '15px',
                  transition: 'all 0.3s'
                }}
              >
                {copiedColor === 'prompt' ? '✓ Prompt Copiato!' : '📋 Copia Prompt'}
              </button>
            </>
          )}
        </div>

        {/* Color Strip Preview */}
        <div style={{
          marginTop: '40px',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '80px',
          display: 'flex',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          {currentPalette.colors.map((color, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                background: color.hex,
                transition: 'flex 0.3s'
              }}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div style={{
          marginTop: '50px',
          textAlign: 'center',
          color: 'white',
          opacity: 0.9
        }}>
          <p style={{
            fontSize: '16px',
            marginBottom: '12px'
          }}>
            🎨 Clicca su qualsiasi colore per copiare il codice HEX
          </p>
          <p style={{
            fontSize: '14px',
            fontWeight: '300'
          }}>
            Ogni palette include un mix bilanciato di tonalità calde e fredde<br/>
            con un colore a contrasto deciso per punti focali visivi
          </p>
        </div>
      </div>
    </div>
  )
}
