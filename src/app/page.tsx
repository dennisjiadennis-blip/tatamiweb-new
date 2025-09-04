import Link from 'next/link'
import {
  TatamiLogo,
  GetaSandal,
  Sneakers,
  SleepingFox,
} from '@/components/ui/illustrations'

export default function HomePage() {
  return (
    <main style={{ 
      backgroundColor: '#2D323A',
      width: '100vw', 
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      padding: '0',
      margin: '0'
    }}>
      {/* Floating Brand Title - Independent positioning */}
      <header style={{
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
      </header>

      {/* Main Grid Container - 12x8 Japandi Magazine Layout */}
      <section 
        style={{
          position: 'absolute',
          top: '15vh',
          left: '5vw',
          width: '90vw',
          height: '80vh',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(8, 1fr)',
          gap: '20px'
        }}
        aria-label="Tatami Labs Navigation Grid"
      >
        
        {/* 1. "A Story Woven with a Master" - Powder Blue - Product Story Entry */}
        <Link 
          href="/product" 
          style={{
            gridColumn: '1 / 5',
            gridRow: '1 / 3',
            backgroundColor: '#B0C4DE',
            borderRadius: '18px',
            border: '2px solid #8B8B8B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            textDecoration: 'none'
          }}
          title="Learn about our product story"
        >
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
        </Link>

        {/* 2. "Stories" - Off-White - Video Content Navigation */}
        <Link 
          href="/stories" 
          style={{
            gridColumn: '6 / 9',
            gridRow: '1 / 2',
            backgroundColor: '#F5F0E8',
            borderRadius: '16px',
            border: '2px solid #8B8B8B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            textDecoration: 'none'
          }}
          title="Explore video stories"
        >
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
        </Link>

        {/* 3. "The Masters Who Shape Your World" - Powder Blue - Craftsmen Directory */}
        <Link 
          href="/masters" 
          style={{
            gridColumn: '9 / 13',
            gridRow: '2 / 4',
            backgroundColor: '#B0C4DE',
            borderRadius: '18px',
            border: '2px solid #8B8B8B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            textDecoration: 'none'
          }}
          title="Meet the master craftsmen"
        >
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
        </Link>

        {/* 4. "My Tatami" + Sneakers - Muted Moss Green - Personal Center */}
        <Link 
          href="/auth" 
          style={{
            gridColumn: '1 / 3',
            gridRow: '3 / 6',
            backgroundColor: '#7A8A6B',
            borderRadius: '16px',
            border: '2px solid #8B8B8B',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            textDecoration: 'none'
          }}
          title="Access your personal space"
        >
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
          <Sneakers style={{ 
            width: 'clamp(60px, 6vw, 80px)', 
            height: 'clamp(60px, 6vw, 80px)', 
            color: '#F5F0E8' 
          }} />
        </Link>

        {/* 5. "One Journey, a Lifetime of Insight" - Burnt Orange - Core Value Proposition */}
        <div style={{
          gridColumn: '3 / 9',
          gridRow: '4 / 6',
          backgroundColor: '#D97D54',
          borderRadius: '20px',
          border: '2px solid #8B8B8B',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
          cursor: 'default',
          transition: 'all 0.4s ease',
          padding: '2vh 2vw'
        }}>
          <div style={{
            fontFamily: 'var(--font-cormorant-garamond), serif',
            fontSize: 'clamp(1.6rem, 2.4vw, 2.8rem)',
            color: '#2D323A',
            textAlign: 'center',
            fontWeight: '500',
            lineHeight: '1.2',
            marginBottom: '1vh'
          }}>
            One Journey, a Lifetime of Insight
          </div>
          <div style={{
            fontFamily: 'var(--font-cormorant-garamond), serif',
            fontSize: 'clamp(0.9rem, 1.2vw, 1.4rem)',
            color: '#2D323A',
            textAlign: 'center',
            fontWeight: '300',
            opacity: 0.8,
            lineHeight: '1.4'
          }}>
            Connect with master craftsmen through immersive dialogues.<br/>
            Discover wisdom in every conversation, insight in every journey.
          </div>
        </div>

        {/* 6. Geta Sandal - Burnt Orange - Traditional Culture Symbol */}
        <div 
          style={{
            gridColumn: '10 / 12',
            gridRow: '4 / 6',
            backgroundColor: '#D97D54',
            borderRadius: '16px',
            border: '2px solid #8B8B8B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
            cursor: 'default',
            transition: 'all 0.4s ease'
          }}
          title="Traditional Japanese Craftsmanship"
          aria-label="Decorative Geta sandal representing traditional culture"
        >
          <GetaSandal style={{ 
            width: 'clamp(60px, 6vw, 80px)', 
            height: 'clamp(60px, 6vw, 80px)', 
            color: '#2D323A' 
          }} />
        </div>

        {/* 7. Sleeping Fox - Muted Moss Green - Zen Wisdom Symbol */}
        <div 
          style={{
            gridColumn: '10 / 12',
            gridRow: '6 / 8',
            backgroundColor: '#7A8A6B',
            borderRadius: '16px',
            border: '2px solid #8B8B8B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
            cursor: 'default',
            transition: 'all 0.4s ease'
          }}
          title="Peaceful Contemplation"
          aria-label="Decorative sleeping fox representing tranquility and wisdom"
        >
          <SleepingFox style={{ 
            width: 'clamp(55px, 5.5vw, 75px)', 
            height: 'clamp(55px, 5.5vw, 75px)', 
            color: '#F5F0E8' 
          }} />
        </div>

        {/* 8. "Join a Journey" - Burnt Orange - Travel Partnership CTA */}
        <Link 
          href="/journey" 
          style={{
            gridColumn: '3 / 7',
            gridRow: '7 / 8',
            backgroundColor: '#D97D54',
            borderRadius: '16px',
            border: '2px solid #8B8B8B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            textDecoration: 'none'
          }}
          title="Join our travel experiences"
        >
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
        </Link>

        {/* 9. Tatami Logo - Off-White - Brand Identity Display */}
        <div 
          style={{
            gridColumn: '6 / 10',
            gridRow: '6 / 8',
            backgroundColor: '#F5F0E8',
            borderRadius: '16px',
            border: '2px solid #8B8B8B',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '4px 4px 0px rgba(0, 0, 0, 0.2)',
            cursor: 'default',
            transition: 'all 0.4s ease'
          }}
          title="Tatami Labs Brand"
          aria-label="Tatami Labs logo and brand identity"
        >
          <TatamiLogo style={{ 
            height: 'clamp(60px, 6vh, 80px)', 
            width: 'auto', 
            color: '#2D323A' 
          }} />
        </div>

      </section>
    </main>
  )
}