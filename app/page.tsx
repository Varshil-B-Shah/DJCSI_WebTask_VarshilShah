import Hotels from "@/components/Hotels";
import { Navbar } from "@/components/Navbar";
import VideoFile from "@/components/VideoFile";

export default function Home() {
  return (
    <div>
      <Navbar />
      <VideoFile />
      <Hotels />
    </div>
  );
}
