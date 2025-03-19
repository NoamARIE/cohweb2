
import React from 'react';
import { Card } from "@/components/ui/card";

// Full chord positions database
const CHORD_LIBRARY = {
  // Major chords
  'C': [
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 0 },
    { string: 3, fret: 2, finger: 2 },
    { string: 4, fret: 3, finger: 3 },
    { string: 5, fret: 'x' }
  ],
  'C#': [
    { string: 0, fret: 4, finger: 4 },
    { string: 1, fret: 2, finger: 2 },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 3, finger: 3 },
    { string: 4, fret: 4, finger: 4 },
    { string: 5, fret: 'x' }
  ],
  'D': [
    { string: 0, fret: 2, finger: 2 },
    { string: 1, fret: 3, finger: 3 },
    { string: 2, fret: 2, finger: 1 },
    { string: 3, fret: 0 },
    { string: 4, fret: 'x' },
    { string: 5, fret: 'x' }
  ],
  'D#': [
    { string: 0, fret: 3, finger: 3 },
    { string: 1, fret: 4, finger: 4 },
    { string: 2, fret: 3, finger: 2 },
    { string: 3, fret: 1, finger: 1 },
    { string: 4, fret: 'x' },
    { string: 5, fret: 'x' }
  ],
  'Db': [
    { string: 0, fret: 3, finger: 3 },
    { string: 1, fret: 4, finger: 4 },
    { string: 2, fret: 3, finger: 2 },
    { string: 3, fret: 1, finger: 1 },
    { string: 4, fret: 'x' },
    { string: 5, fret: 'x' }
  ],
  'E': [
    { string: 0, fret: 0 },
    { string: 1, fret: 0 },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 2, finger: 2 },
    { string: 4, fret: 2, finger: 3 },
    { string: 5, fret: 0 }
  ],
  'Eb': [
    { string: 0, fret: 'x' },
    { string: 1, fret: 'x' },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 3, finger: 3 },
    { string: 4, fret: 3, finger: 4 },
    { string: 5, fret: 1, finger: 2 }
  ],
  'F': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 2, finger: 2 },
    { string: 3, fret: 3, finger: 4 },
    { string: 4, fret: 3, finger: 3 },
    { string: 5, fret: 1, finger: 1 }
  ],
  'F#': [
    { string: 0, fret: 2, finger: 1 },
    { string: 1, fret: 2, finger: 1 },
    { string: 2, fret: 3, finger: 2 },
    { string: 3, fret: 4, finger: 4 },
    { string: 4, fret: 4, finger: 3 },
    { string: 5, fret: 2, finger: 1 }
  ],
  'G': [
    { string: 0, fret: 3, finger: 3 },
    { string: 1, fret: 0 },
    { string: 2, fret: 0 },
    { string: 3, fret: 0 },
    { string: 4, fret: 2, finger: 1 },
    { string: 5, fret: 3, finger: 2 }
  ],
  'G#': [
    { string: 0, fret: 4, finger: 3 },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 1, finger: 1 },
    { string: 4, fret: 3, finger: 2 },
    { string: 5, fret: 4, finger: 4 }
  ],
  'Gb': [
    { string: 0, fret: 2, finger: 1 },
    { string: 1, fret: 2, finger: 1 },
    { string: 2, fret: 3, finger: 2 },
    { string: 3, fret: 4, finger: 4 },
    { string: 4, fret: 4, finger: 3 },
    { string: 5, fret: 2, finger: 1 }
  ],
  'A': [
    { string: 0, fret: 0 },
    { string: 1, fret: 2, finger: 2 },
    { string: 2, fret: 2, finger: 3 },
    { string: 3, fret: 2, finger: 4 },
    { string: 4, fret: 0 },
    { string: 5, fret: 'x' }
  ],
  'A#': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 3, finger: 3 },
    { string: 2, fret: 3, finger: 4 },
    { string: 3, fret: 3, finger: 4 },
    { string: 4, fret: 1, finger: 1 },
    { string: 5, fret: 'x' }
  ],
  'Ab': [
    { string: 0, fret: 'x' },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 1, finger: 1 },
    { string: 4, fret: 3, finger: 3 },
    { string: 5, fret: 4, finger: 4 }
  ],
  'B': [
    { string: 0, fret: 2, finger: 1 },
    { string: 1, fret: 4, finger: 3 },
    { string: 2, fret: 4, finger: 4 },
    { string: 3, fret: 4, finger: 4 },
    { string: 4, fret: 2, finger: 1 },
    { string: 5, fret: 'x' }
  ],
  'Bb': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 3, finger: 3 },
    { string: 2, fret: 3, finger: 4 },
    { string: 3, fret: 3, finger: 4 },
    { string: 4, fret: 1, finger: 1 },
    { string: 5, fret: 'x' }
  ],

  // Minor chords
  'Am': [
    { string: 0, fret: 0 },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 2, finger: 2 },
    { string: 3, fret: 2, finger: 3 },
    { string: 4, fret: 0 },
    { string: 5, fret: 'x' }
  ],
  'A#m': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 2, finger: 2 },
    { string: 2, fret: 3, finger: 3 },
    { string: 3, fret: 3, finger: 4 },
    { string: 4, fret: 1, finger: 1 },
    { string: 5, fret: 'x' }
  ],
  'Abm': [
    { string: 0, fret: 'x' },
    { string: 1, fret: 0 },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 1, finger: 2 },
    { string: 4, fret: 4, finger: 4 },
    { string: 5, fret: 'x' }
  ],
  'Bm': [
    { string: 0, fret: 2, finger: 1 },
    { string: 1, fret: 3, finger: 3 },
    { string: 2, fret: 4, finger: 4 },
    { string: 3, fret: 4, finger: 4 },
    { string: 4, fret: 2, finger: 1 },
    { string: 5, fret: 'x' }
  ],
  'Bbm': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 2, finger: 2 },
    { string: 2, fret: 3, finger: 3 },
    { string: 3, fret: 3, finger: 4 },
    { string: 4, fret: 1, finger: 1 },
    { string: 5, fret: 'x' }
  ],
  'Cm': [
    { string: 0, fret: 3, finger: 3 },
    { string: 1, fret: 4, finger: 4 },
    { string: 2, fret: 5, finger: 4 },
    { string: 3, fret: 5, finger: 4 },
    { string: 4, fret: 3, finger: 1 },
    { string: 5, fret: 'x' }
  ],
  'C#m': [
    { string: 0, fret: 4, finger: 4 },
    { string: 1, fret: 5, finger: 4 },
    { string: 2, fret: 6, finger: 4 },
    { string: 3, fret: 6, finger: 4 },
    { string: 4, fret: 4, finger: 1 },
    { string: 5, fret: 'x' }
  ],
  'Dm': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 3, finger: 3 },
    { string: 2, fret: 2, finger: 2 },
    { string: 3, fret: 0 },
    { string: 4, fret: 'x' },
    { string: 5, fret: 'x' }
  ],
  'D#m': [
    { string: 0, fret: 'x' },
    { string: 1, fret: 'x' },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 3, finger: 3 },
    { string: 4, fret: 4, finger: 4 },
    { string: 5, fret: 2, finger: 2 }
  ],
  'Dbm': [
    { string: 0, fret: 'x' },
    { string: 1, fret: 'x' },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 3, finger: 3 },
    { string: 4, fret: 4, finger: 4 },
    { string: 5, fret: 2, finger: 2 }
  ],
  'Em': [
    { string: 0, fret: 0 },
    { string: 1, fret: 0 },
    { string: 2, fret: 0 },
    { string: 3, fret: 2, finger: 2 },
    { string: 4, fret: 2, finger: 3 },
    { string: 5, fret: 0 }
  ],
  'Ebm': [
    { string: 0, fret: 'x' },
    { string: 1, fret: 'x' },
    { string: 2, fret: 'x' },
    { string: 3, fret: 1, finger: 1 },
    { string: 4, fret: 1, finger: 1 },
    { string: 5, fret: 'x' }
  ],
  'Fm': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 3, finger: 3 },
    { string: 4, fret: 3, finger: 4 },
    { string: 5, fret: 1, finger: 1 }
  ],
  'F#m': [
    { string: 0, fret: 2, finger: 1 },
    { string: 1, fret: 2, finger: 1 },
    { string: 2, fret: 2, finger: 1 },
    { string: 3, fret: 4, finger: 3 },
    { string: 4, fret: 4, finger: 4 },
    { string: 5, fret: 2, finger: 1 }
  ],
  'Gm': [
    { string: 0, fret: 3, finger: 2 },
    { string: 1, fret: 3, finger: 3 },
    { string: 2, fret: 3, finger: 4 },
    { string: 3, fret: 5, finger: 1 },
    { string: 4, fret: 5, finger: 1 },
    { string: 5, fret: 3, finger: 2 }
  ],
  'G#m': [
    { string: 0, fret: 4, finger: 2 },
    { string: 1, fret: 4, finger: 3 },
    { string: 2, fret: 4, finger: 4 },
    { string: 3, fret: 6, finger: 1 },
    { string: 4, fret: 6, finger: 1 },
    { string: 5, fret: 4, finger: 2 }
  ],
  
  // 7th chords
  'C7': [
    { string: 0, fret: 0 },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 3, finger: 3 },
    { string: 3, fret: 2, finger: 2 },
    { string: 4, fret: 3, finger: 4 },
    { string: 5, fret: 'x' }
  ],
  'D7': [
    { string: 0, fret: 2, finger: 2 },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 2, finger: 3 },
    { string: 3, fret: 0 },
    { string: 4, fret: 'x' },
    { string: 5, fret: 'x' }
  ],
  'E7': [
    { string: 0, fret: 0 },
    { string: 1, fret: 0 },
    { string: 2, fret: 1, finger: 1 },
    { string: 3, fret: 0 },
    { string: 4, fret: 2, finger: 2 },
    { string: 5, fret: 0 }
  ],
  'F7': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 2, finger: 2 },
    { string: 3, fret: 1, finger: 1 },
    { string: 4, fret: 3, finger: 3 },
    { string: 5, fret: 'x' }
  ],
  'G7': [
    { string: 0, fret: 1, finger: 1 },
    { string: 1, fret: 0 },
    { string: 2, fret: 0 },
    { string: 3, fret: 0 },
    { string: 4, fret: 2, finger: 2 },
    { string: 5, fret: 3, finger: 3 }
  ],
  'A7': [
    { string: 0, fret: 0 },
    { string: 1, fret: 2, finger: 2 },
    { string: 2, fret: 0 },
    { string: 3, fret: 2, finger: 3 },
    { string: 4, fret: 0 },
    { string: 5, fret: 'x' }
  ],
  'B7': [
    { string: 0, fret: 2, finger: 1 },
    { string: 1, fret: 0 },
    { string: 2, fret: 2, finger: 2 },
    { string: 3, fret: 1, finger: 1 },
    { string: 4, fret: 2, finger: 3 },
    { string: 5, fret: 'x' }
  ],
  
  // Suspended and other chords
  'Csus4': [
    { string: 0, fret: 0 },
    { string: 1, fret: 1, finger: 1 },
    { string: 2, fret: 3, finger: 3 },
    { string: 3, fret: 3, finger: 4 },
    { string: 4, fret: 'x' },
    { string: 5, fret: 'x' }
  ],
  'Dsus4': [
    { string: 0, fret: 'x' },
    { string: 1, fret: 'x' },
    { string: 2, fret: 0 },
    { string: 3, fret: 2, finger: 1 },
    { string: 4, fret: 3, finger: 3 },
    { string: 5, fret: 0 }
  ],
  'Esus4': [
    { string: 0, fret: 0 },
    { string: 1, fret: 0 },
    { string: 2, fret: 2, finger: 2 },
    { string: 3, fret: 2, finger: 3 },
    { string: 4, fret: 2, finger: 4 },
    { string: 5, fret: 0 }
  ],
  'Asus4': [
    { string: 0, fret: 0 },
    { string: 1, fret: 2, finger: 2 },
    { string: 2, fret: 2, finger: 3 },
    { string: 3, fret: 2, finger: 4 },
    { string: 4, fret: 0 },
    { string: 5, fret: 'x' }
  ]
};

export default function ChordDiagram({ name }) {
  // Parse chord name to find the base chord in our library
  const baseChord = name.replace(/[0-9]|m|sus|dim|aug|maj|add|\(|\)|\//g, '');
  const isMinor = name.includes('m') && !name.includes('maj');
  const is7th = name.includes('7');
  const isSus = name.includes('sus');
  
  // Try to match the chord exactly, then try base + modifiers
  let positions;
  if (CHORD_LIBRARY[name]) {
    positions = CHORD_LIBRARY[name];
  } else if (isMinor && CHORD_LIBRARY[baseChord + 'm']) {
    positions = CHORD_LIBRARY[baseChord + 'm'];
  } else if (is7th && CHORD_LIBRARY[baseChord + '7']) {
    positions = CHORD_LIBRARY[baseChord + '7'];
  } else if (isSus && CHORD_LIBRARY[baseChord + 'sus4']) {
    positions = CHORD_LIBRARY[baseChord + 'sus4'];
  } else if (CHORD_LIBRARY[baseChord]) {
    positions = CHORD_LIBRARY[baseChord];
  } else {
    // Default positions if we can't find the chord
    positions = [];
  }
  
  return (
    <Card className="p-3 hover:shadow-md transition-shadow">
      <div className="text-center font-bold mb-2">{name}</div>
      <div className="relative w-full max-w-[120px] mx-auto">
        {/* Nut */}
        <div className="h-2 bg-gray-800 mb-2"></div>
        
        {/* Frets */}
        {[0, 1, 2, 3].map((fret) => (
          <div key={fret} className="h-7 border-b border-gray-300 relative flex">
            {/* Fret number */}
            {fret > 0 && (
              <div className="absolute -right-5 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                {fret}
              </div>
            )}
            
            {/* Strings */}
            {[0, 1, 2, 3, 4, 5].map((string) => {
              // Find finger position for this string+fret
              const position = positions.find(p => p.string === string && (p.fret === fret || (fret === 0 && p.fret === 'x')));
              const stringPosition = positions.find(p => p.string === string);
              
              return (
                <div key={string} className="flex-1 border-r border-gray-300 relative">
                  {/* String line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gray-400"></div>
                  
                  {/* Finger position - only show when there's a finger on this position */}
                  {position && position.fret !== 'x' && position.fret !== 0 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                      {position.finger}
                    </div>
                  )}
                  
                  {/* Show X for muted strings */}
                  {fret === 0 && stringPosition && stringPosition.fret === 'x' && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-500 font-bold text-xs">
                      ✕
                    </div>
                  )}
                  
                  {/* Show O for open strings */}
                  {fret === 0 && stringPosition && stringPosition.fret === 0 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-gray-600"></div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </Card>
  );
}
