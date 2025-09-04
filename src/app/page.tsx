import {
  TatamiLogo,
  GetaSandal,
  Sneakers,
  SleepingFox,
} from '@/components/ui/illustrations'

export default function HomePage() {
  return (
    <div style={{ 
      backgroundColor: '#2D323A',
      width: '100vw', 
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      padding: '0',
      margin: '0'
    }}>
      {/* Title - Top-left corner, floating independently */}
      <div style={{
        position: 'absolute',
        top: '5vh',
        left: '5vw',
        zIndex: 50
      }}>
        <h1 style={{
          fontFamily: 'var(--font-cormorant-garamond), serif',
          fontSize: 'clamp(3rem, 4.5vw, 4.8rem)',
          color: '#F5F0E8',
          textShadow: '3px 3px 12px rgba(0,0,0,0.7)',
          margin: 0,
          padding: 0,
          letterSpacing: '3px',
          fontWeight: '400'
        }}>
          Tatami Labs
        </h1>
      </div>

      {/* Asymmetrical Collage - Full screen utilization with consistent gaps */}
      <div style={{
        position: 'absolute',
        top: '15vh',
        left: '5vw',
        width: '90vw',
        height: '80vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(8, 1fr)',
        gap: '20px'
      }}>
        
        {/* Large landscape block - "A Story Woven with a Master" - Powder Blue */}
        <div style={{
          gridColumn: '1 / 5',
          gridRow: '1 / 3',
          backgroundColor: '#B0C4DE',
          borderRadius: '18px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(176, 196, 222, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <div style={{
            fontFamily: 'var(--font-cormorant-garamond), serif',
            fontSize: 'clamp(1.2rem, 1.6vw, 1.8rem)',
            color: '#2D323A',
            textAlign: 'center',
            fontWeight: '300',
            padding: '0 2vw',
            lineHeight: '1.1'
          }}>
            A Story Woven with a Master
          </div>
        </div>

        {/* Medium block - "Stories" - Off-White */}
        <div style={{
          gridColumn: '6 / 9',
          gridRow: '1 / 2',
          backgroundColor: '#F5F0E8',
          borderRadius: '16px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(245, 240, 232, 0.5)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <div style={{
            fontFamily: 'var(--font-cormorant-garamond), serif',
            fontSize: 'clamp(1.8rem, 2.4vw, 2.6rem)',
            color: '#2D323A',
            textAlign: 'center',
            fontWeight: '300',
            lineHeight: '1'
          }}>
            Stories
          </div>
        </div>

        {/* Large landscape block - "The Masters Who Shape Your World" - Powder Blue */}
        <div style={{
          gridColumn: '9 / 13',
          gridRow: '2 / 4',
          backgroundColor: '#B0C4DE',
          borderRadius: '18px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(176, 196, 222, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <div style={{
            fontFamily: 'var(--font-cormorant-garamond), serif',
            fontSize: 'clamp(1.2rem, 1.6vw, 1.8rem)',
            color: '#2D323A',
            textAlign: 'center',
            fontWeight: '300',
            padding: '0 2vw',
            lineHeight: '1.1'
          }}>
            The Masters Who Shape Your World
          </div>
        </div>

        {/* Portrait block - "My Tatami" + Sneakers - Muted Moss Green */}
        <div style={{
          gridColumn: '1 / 3',
          gridRow: '3 / 6',
          backgroundColor: '#7A8A6B',
          borderRadius: '16px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 16px 50px rgba(122, 138, 107, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <div style={{
            fontFamily: 'var(--font-cormorant-garamond), serif',
            fontSize: 'clamp(1.3rem, 1.8vw, 2rem)',
            color: '#F5F0E8',
            textAlign: 'center',
            fontWeight: '300',
            marginBottom: '3vh',
            lineHeight: '1'
          }}>
            My Tatami
          </div>
          <Sneakers style={{ width: 'clamp(60px, 6vw, 80px)', height: 'clamp(60px, 6vw, 80px)', color: '#F5F0E8' }} />
        </div>

        {/* Large central landscape block - "One Journey, a Lifetime of Insight" - Burnt Orange */}
        <div style={{
          gridColumn: '3 / 9',
          gridRow: '4 / 6',
          backgroundColor: '#D97D54',
          borderRadius: '20px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 20px 60px rgba(217, 125, 84, 0.5)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <div style={{
            fontFamily: 'var(--font-cormorant-garamond), serif',
            fontSize: 'clamp(1.8rem, 2.8vw, 3.2rem)',
            color: '#2D323A',
            textAlign: 'center',
            fontWeight: '500',
            padding: '0 3vw',
            lineHeight: '1.1'
          }}>
            One Journey, a Lifetime of Insight
          </div>
        </div>

        {/* Square block - Geta sandal - Burnt Orange */}
        <div style={{
          gridColumn: '10 / 12',
          gridRow: '4 / 6',
          backgroundColor: '#D97D54',
          borderRadius: '16px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(217, 125, 84, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <GetaSandal style={{ width: 'clamp(60px, 6vw, 80px)', height: 'clamp(60px, 6vw, 80px)', color: '#2D323A' }} />
        </div>

        {/* Square block - Sleeping fox - Muted Moss Green */}
        <div style={{
          gridColumn: '10 / 12',
          gridRow: '6 / 8',
          backgroundColor: '#7A8A6B',
          borderRadius: '16px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(122, 138, 107, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <SleepingFox style={{ width: 'clamp(55px, 5.5vw, 75px)', height: 'clamp(55px, 5.5vw, 75px)', color: '#F5F0E8' }} />
        </div>

        {/* Medium landscape block - "Join a Journey" - Burnt Orange */}
        <div style={{
          gridColumn: '3 / 7',
          gridRow: '7 / 8',
          backgroundColor: '#D97D54',
          borderRadius: '16px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(217, 125, 84, 0.4)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <div style={{
            fontFamily: 'var(--font-cormorant-garamond), serif',
            fontSize: 'clamp(1.3rem, 1.8vw, 2rem)',
            color: '#2D323A',
            textAlign: 'center',
            fontWeight: '300',
            lineHeight: '1'
          }}>
            Join a Journey
          </div>
        </div>

        {/* Landscape block - Tatami Logo - Off-White */}
        <div style={{
          gridColumn: '6 / 10',
          gridRow: '6 / 8',
          backgroundColor: '#F5F0E8',
          borderRadius: '16px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 40px rgba(245, 240, 232, 0.5)',
          cursor: 'pointer',
          transition: 'all 0.4s ease'
        }}>
          <TatamiLogo style={{ height: 'clamp(60px, 6vh, 80px)', width: 'auto', color: '#2D323A' }} />
        </div>

      </div>
    </div>
  )
}