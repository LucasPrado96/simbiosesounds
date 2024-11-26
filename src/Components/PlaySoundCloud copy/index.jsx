import { Container } from './styles'


export function PlaylistSimbiose() {

  return (

    <Container>
      <div>
        <iframe 
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1897228215&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>

        <div
          style={{
            fontSize: '10px',
            color: '#cccccc',
            lineBreak: 'anywhere',
            wordBreak: 'normal',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            fontFamily:
              'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
            fontWeight: '100',
          }}
          >

          <a
            href="https://soundcloud.com/simbiosesounds"
            title="Simbiose Sounds"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            Simbiose Sounds
          </a> {' '}
          . {' '}
          <a
            href="https://soundcloud.com/simbiosesounds/sets/simbiose-sounds-releases"
            title="☠️ SIMBIOSE SOUNDS RELEASES ☠️"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#cccccc', textDecoration: 'none' }}
          >
            ☠️ SIMBIOSE SOUNDS RELEASES ☠️
          </a>

        </div>
      </div>
    </Container>




  )
}

