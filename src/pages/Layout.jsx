
import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { GuitarIcon, Home, Library, Search, Music, Menu, Plus } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Layout({ children }) {
  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col md:flex-row" dir="rtl">
        {/* Desktop Sidebar */}
        <aside className="w-64 bg-white border-l hidden md:block p-6">
          <div className="flex items-center gap-2 mb-8">
            <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=240&h=240&fit=crop" alt="גיטרה" className="w-12 h-12 rounded-full object-cover" />
            <span className="font-bold text-xl">מלווה מלכה</span>
          </div>
          
          <nav className="space-y-2">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Home className="w-5 h-5" />
              דף הבית
            </Link>
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Search className="w-5 h-5" />
              חיפוש
            </Link>
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Library className="w-5 h-5" />
              הספרייה שלי
            </Link>
            <Link
              to={createPageUrl("Home")}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Music className="w-5 h-5" />
              פלייליסטים
            </Link>
          </nav>
          
          <div className="mt-8 border-t pt-6">
            <Link to={createPageUrl("AddSong")}>
              <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                הוסף שיר
              </Button>
            </Link>
          </div>
        </aside>

        {/* Mobile header */}
        <div className="bg-white border-b p-4 sticky top-0 z-50 flex justify-between items-center md:hidden">
          <div className="flex items-center gap-2">
            <img src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=240&h=240&fit=crop" alt="גיטרה" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-bold">מלווה מלכה</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to={createPageUrl("AddSong")}>
              <Button size="sm" variant="outline" className="gap-1">
                <Plus className="w-4 h-4" />
                הוסף
              </Button>
            </Link>
            
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-gray-100 rounded-md">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="pt-6">
                  <nav className="space-y-2">
                    <Link
                      to={createPageUrl("Home")}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <Home className="w-5 h-5" />
                      דף הבית
                    </Link>
                    <Link
                      to={createPageUrl("Home")}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <Search className="w-5 h-5" />
                      חיפוש
                    </Link>
                    <Link
                      to={createPageUrl("Home")}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <Library className="w-5 h-5" />
                      הספרייה שלי
                    </Link>
                    <Link
                      to={createPageUrl("Home")}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                    >
                      <Music className="w-5 h-5" />
                      פלייליסטים
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </TooltipProvider>
  );
}
