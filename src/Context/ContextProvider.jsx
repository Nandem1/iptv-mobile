import React, {
  createContext, useContext, useState, useEffect,
} from 'react';
import { Parser } from 'm3u8-parser';
import axios from 'axios';

const Context = createContext();

export function ContextProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const mainPlaylistUrl = 'https://iptv-org.github.io/iptv/countries/cl.m3u';

    const fetchData = async () => {
      try {
        const response = await axios.get(mainPlaylistUrl);
        const m3uPlaylist = response.data;

        const parser = new Parser();
        parser.push(m3uPlaylist);
        parser.end();

        const parsedData = parser.manifest;

        // Filtra y obtiene la información completa de los medios
        const mediaInfo = parsedData.segments.map(segment => {
          // Extrae la información del objeto en la línea M3U
          const { title, uri } = segment;

          // También puedes hacer coincidir otros atributos del objeto, si es necesario
          const match = title.match(/tvg-id="([^"]+)" tvg-logo="([^"]+)" group-title="([^"]+)",(.+)/);

          if (match) {
            const [, tvgId, tvgLogo, groupTitle, channelName] = match;
            
            return {
              tvgId,
              tvgLogo,
              groupTitle,
              channelName,
              url: uri,
            };
          } else {
            // Si no se encontró información adicional, devuelve solo la URL
            return { url: uri };
          }
        });

        setData(mediaInfo);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    //console.log("CL 72: ", data)
  }, [data])

  return (
    <Context.Provider value={data}>
      {children}
    </Context.Provider>
  );
}

export const useContx = () => useContext(Context);
