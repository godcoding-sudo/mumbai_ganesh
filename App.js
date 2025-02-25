import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const ganeshIdols = [
  { name: "Lalbaugcha Raja", location: "Lalbaug, Mumbai", details: "One of the most famous Ganesh idols in Mumbai, known for its grandeur.", coordinates: [19.0176, 72.8546] },
  { name: "Ganesh Galli", location: "Parel, Mumbai", details: "Known for its intricate themes and decorations.", coordinates: [19.0144, 72.8353] },
  { name: "Khetwadi Ganraj", location: "Khetwadi, Mumbai", details: "Popular for its stunningly tall Ganesh idols.", coordinates: [18.9543, 72.8205] }
];

export default function MumbaiGaneshApp() {
  const [selectedIdol, setSelectedIdol] = useState(null);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Mumbai Ganesh Idols</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ganeshIdols.map((idol, index) => (
          <Card key={index} className="p-4 cursor-pointer" onClick={() => setSelectedIdol(idol)}>
            <CardContent>
              <h2 className="text-xl font-semibold">{idol.name}</h2>
              <p className="text-sm text-gray-600">{idol.location}</p>
              <p className="mt-2">{idol.details}</p>
              <Button variant="outline" className="mt-2 flex items-center">
                <MapPin className="w-4 h-4 mr-2" /> View on Map
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedIdol && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold">{selectedIdol.name}</h2>
          <p>{selectedIdol.details}</p>
          <p className="text-sm text-gray-500">Location: {selectedIdol.location}</p>
        </div>
      )}
    </div>
  );
}
