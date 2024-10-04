import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import './WorldMap.css';

// Map data URL (use a simplified world-geojson file)
const geoUrl =
 '/world-110m.json';

// Random percentages for large countries
const countryData = {
  USA: Math.floor(Math.random() * 100),
  RUS: Math.floor(Math.random() * 100),
  CHN: Math.floor(Math.random() * 100),
  IND: Math.floor(Math.random() * 100),
};

const colorScale = scaleLinear().domain([0, 100]).range(['#ffedea', '#ff5233']);

const WorldMap = () => {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <div className="map-container">
      <h2>Interactive World Map</h2>
      <ComposableMap data-tip="">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryISO = geo.properties.ISO_A3;
              const percentage = countryData[countryISO] || Math.floor(Math.random() * 100);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    setTooltipContent(`${geo.properties.NAME}: ${percentage}%`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
                  style={{
                    default: {
                      fill: colorScale(percentage),
                      outline: 'none',
                    },
                    hover: {
                      fill: '#2B8CBE',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#FF5722',
                      outline: 'none',
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div className="tooltip">{tooltipContent}</div>
    </div>
  );
};

export default WorldMap;
