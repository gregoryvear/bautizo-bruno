import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Bautizo de Bruno - 11 de Abril 2026';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Elegant corner ornaments */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            width: 80,
            height: 80,
            borderTop: '2px solid #C9A86C',
            borderLeft: '2px solid #C9A86C',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            width: 80,
            height: 80,
            borderTop: '2px solid #C9A86C',
            borderRight: '2px solid #C9A86C',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 40,
            width: 80,
            height: 80,
            borderBottom: '2px solid #C9A86C',
            borderLeft: '2px solid #C9A86C',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            width: 80,
            height: 80,
            borderBottom: '2px solid #C9A86C',
            borderRight: '2px solid #C9A86C',
          }}
        />

        {/* Cross */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 3,
              height: 50,
              backgroundColor: '#C9A86C',
            }}
          />
          <div
            style={{
              width: 30,
              height: 3,
              backgroundColor: '#C9A86C',
              marginTop: -35,
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: '#8B8680',
              fontSize: 22,
              letterSpacing: 6,
              textTransform: 'uppercase',
              marginBottom: 8,
              fontWeight: 400,
            }}
          >
            Con la bendición de Dios celebramos el
          </p>
          
          <p
            style={{
              color: '#C9A86C',
              fontSize: 72,
              fontStyle: 'italic',
              margin: '0 0 8px 0',
              fontWeight: 400,
            }}
          >
            Bautizo
          </p>
          
          <p
            style={{
              color: '#8B8680',
              fontSize: 20,
              marginBottom: 8,
            }}
          >
            de nuestro hijo
          </p>
          
          <h1
            style={{
              color: '#2C2C2C',
              fontSize: 110,
              fontWeight: 300,
              margin: 0,
              lineHeight: 1,
              letterSpacing: 8,
            }}
          >
            BRUNO
          </h1>
          
          {/* Golden line */}
          <div
            style={{
              width: 100,
              height: 2,
              backgroundColor: '#C9A86C',
              margin: '24px 0',
            }}
          />
          
          {/* Date */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span style={{ color: '#8B8680', fontSize: 20, letterSpacing: 2 }}>
              SÁBADO
            </span>
            <span style={{ color: '#C9A86C', fontSize: 18 }}>│</span>
            <span style={{ color: '#C9A86C', fontSize: 48, fontWeight: 300 }}>
              11
            </span>
            <span style={{ color: '#C9A86C', fontSize: 18 }}>│</span>
            <span style={{ color: '#8B8680', fontSize: 20, letterSpacing: 2 }}>
              ABRIL 2026
            </span>
            <span style={{ color: '#C9A86C', fontSize: 18 }}>│</span>
            <span style={{ color: '#8B8680', fontSize: 20 }}>
              12:00 PM
            </span>
          </div>
          
          <p
            style={{
              color: '#8B8680',
              fontSize: 18,
              marginTop: 20,
            }}
          >
            Weston, Florida
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
