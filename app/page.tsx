import Facilities from "@/components/Facilities";
import Hotels from "@/components/Hotels";
import Map from "@/components/Map";
import { Navbar } from "@/components/Navbar";
import VideoFile from "@/components/VideoFile";

export default function Home() {
  return (
    <div>
      <Navbar />
      <VideoFile />
      <Hotels />
      <Facilities />
      <Map />
    </div>
  );
}
