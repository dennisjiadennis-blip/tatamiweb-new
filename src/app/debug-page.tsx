// Debug page to test if basic styling works

export default function DebugPage() {
  return (
    <div style={{ 
      backgroundColor: '#2D323A', 
      width: '100vw', 
      height: '100vh',
      position: 'relative'
    }}>
      <h1 style={{
        position: 'absolute',
        top: '50px',
        left: '50px',
        color: '#F5F0E8',
        fontSize: '4rem',
        fontFamily: 'Ma Shan Zheng, cursive',
        transform: 'rotate(-2deg)'
      }}>
        Tatami Labs
      </h1>
      
      <div style={{
        position: 'absolute',
        top: '200px',
        left: '100px',
        width: '300px',
        height: '200px',
        backgroundColor: '#B0C4DE',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 20px 40px rgba(176, 196, 222, 0.3)'
      }}>
        <div style={{
          fontFamily: 'Playfair Display, serif',
          color: '#1C1C1C',
          fontSize: '1.5rem',
          textAlign: 'center'
        }}>
          Test Block
        </div>
      </div>
    </div>
  )
}