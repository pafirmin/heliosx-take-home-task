export default function Footer() {
  return (
    <footer className="bg-darkblue text-white">
      <div className="flex justify-between p-4 w-full max-w-screen-lg mx-auto flex-col sm:flex-row">
        <div className="flex-1">
          <h5 className="mb-2 font-bold text-center sm:text-left">
            Important links
          </h5>
          <nav className="flex flex-col gap-2">
            <div>
              <a href="#">A link</a>
            </div>
            <div>
              <a href="#">Another link</a>
            </div>
            <div>
              <a href="#">Yet another link</a>
            </div>
            <div>
              <a href="#">One more link</a>
            </div>
          </nav>
        </div>
        <div className="flex-1">
          <h5 className="mb-2 font-bold text-center sm:text-left">
            Some helpful text
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            magna a enim auctor auctor vel id velit. Quisque sagittis imperdiet
            interdum. Cras maximus semper velit a laoreet.
          </p>
        </div>
      </div>
    </footer>
  );
}
