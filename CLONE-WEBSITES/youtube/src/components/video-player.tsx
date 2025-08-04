export function VideoPlayer() {
  return (
    <div className="aspect-video rounded-lg overflow-hidden bg-black">
      <video className="w-full h-full" controls poster="/placeholder.svg?height=480&width=854&text=Video+Player">
        <source src="#" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
