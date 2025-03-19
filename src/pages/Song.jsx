
import React, { useState, useEffect, useRef } from 'react';
import { Song } from '@/api/entities';
import { Button } from "@/components/ui/button";
import { 
  Music, 
  ChevronUp, 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  ChevronsUp,
  ChevronsDown
} from "lucide-react";
import SongHeader from '../components/song/SongHeader';
import ChordLine from '../components/song/ChordLine';
import ChordDiagram from '../components/chord-display/ChordDiagram';

const PITCH_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export default function SongPage() {
  const [song, setSong] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [pitchChange, setPitchChange] = useState(0);
  const [chordsVisible, setChordsVisible] = useState(false);
  const scrollIntervalRef = useRef(null);
  const urlParams = new URLSearchParams(window.location.search);
  const songId = urlParams.get('id');

  useEffect(() => {
    if (songId) {
      loadSong();
    }
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [songId]);

  const loadSong = async () => {
    const songData = await Song.get(songId);
    setSong(songData);
    
    try {
      await Song.update(songId, {
        views: (songData.views || 0) + 1
      });
    } catch (error) {
      console.error("Error updating view count:", error);
    }
  };

  const toggleAutoScroll = () => {
    if (isScrolling && scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    } else {
      scrollIntervalRef.current = setInterval(() => {
        window.scrollBy(0, scrollSpeed);
      }, 50);
    }
    setIsScrolling(!isScrolling);
  };

  const adjustPitch = (halfSteps) => {
    setPitchChange(prev => {
      const newValue = Math.round((prev + halfSteps) * 2) / 2;
      return newValue;
    });
  };

  const transposeChord = (chord) => {
    if (!chord || pitchChange === 0) return chord;

    const rootMatch = chord.match(/^[A-G][#b]?/);
    if (!rootMatch) return chord;

    const root = rootMatch[0];
    const quality = chord.slice(root.length);
    
    const currentIndex = PITCH_NOTES.indexOf(root);
    if (currentIndex === -1) return chord;

    let steps = Math.floor(pitchChange);
    if (pitchChange % 1 !== 0) {
      if (pitchChange > 0) {
        steps = Math.floor(pitchChange);
        const newIndex = (currentIndex + steps + 12) % 12;
        if (pitchChange % 1 === 0.5) {
          if (PITCH_NOTES[newIndex].includes('#')) {
            return PITCH_NOTES[(newIndex + 1) % 12] + quality;
          } else {
            return PITCH_NOTES[newIndex] + '#' + quality;
          }
        }
        return PITCH_NOTES[newIndex] + quality;
      } else {
        steps = Math.ceil(pitchChange);
        const newIndex = (currentIndex + steps + 12) % 12;
        if (pitchChange % 1 === -0.5) {
          if (PITCH_NOTES[newIndex].includes('#')) {
            return PITCH_NOTES[newIndex].replace('#', '') + quality;
          } else {
            const prevIndex = (newIndex - 1 + 12) % 12;
            return PITCH_NOTES[prevIndex] + quality;
          }
        }
        return PITCH_NOTES[newIndex] + quality;
      }
    }

    const newIndex = (currentIndex + steps + 12) % 12;
    return PITCH_NOTES[newIndex] + quality;
  };

  if (!song) return null;

  const lines = song.lyrics.split('\n');
  const transposedChords = song.chords.map(chord => ({
    ...chord,
    name: transposeChord(chord.name)
  }));
  const uniqueChords = [...new Set(transposedChords.map(c => c.name))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <SongHeader song={song} />

        {song.youtube_id && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${song.youtube_id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="sticky top-0 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm mb-8 z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <Button
                variant={isScrolling ? "secondary" : "outline"}
                className="gap-2"
                onClick={toggleAutoScroll}
              >
                <Music className="w-4 h-4" />
                {isScrolling ? 'עצור גלילה' : 'גלילה אוטומטית'}
              </Button>
              
              {isScrolling && (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setScrollSpeed(Math.max(0.5, scrollSpeed - 0.5))}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                  <span className="text-sm">מהירות: {scrollSpeed}x</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setScrollSpeed(scrollSpeed + 0.5)}
                  >
                    <ChevronUp className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-sm">שנה טון:</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => adjustPitch(-0.5)}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center">
                  {pitchChange > 0 ? `+${pitchChange}` : pitchChange}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => adjustPitch(0.5)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </div>
              
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setChordsVisible(!chordsVisible)}
              >
                {chordsVisible ? <ChevronsDown className="w-4 h-4" /> : <ChevronsUp className="w-4 h-4" />}
                {chordsVisible ? 'הסתר אקורדים' : 'הצג אקורדים'}
              </Button>
            </div>
          </div>
        </div>

        {chordsVisible && (
          <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-in slide-in-from-top-2 duration-200">
            {uniqueChords.map(chord => (
              <ChordDiagram key={chord} name={chord} />
            ))}
          </div>
        )}

        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
          {lines.map((line, index) => (
            <ChordLine
              key={index}
              line={line}
              chords={transposedChords.filter(c => c.position === index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
