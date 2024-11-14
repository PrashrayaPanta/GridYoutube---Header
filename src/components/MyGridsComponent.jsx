import Thumbnail1 from "../assets/thumbnail1.webp";
import Thumbnail2 from "../assets/thumbnail2.webp";
import ProfilePic from "../assets/channels4_profile.jpg";

// import { EachBox } from "./EachBox";
import { Button } from "./ui/button";

export const MyGridsComponent = () => {
  return (
    <section class="bg-green-400 p-2">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-3 ">
        {/* <!-- Each Grid --> */}
        <div class="video-preview">
          <div class="mb-3 bg-blue-500">
            <img src={Thumbnail1} alt="" class="w-full thumbnail" />
          </div>
          <div class="grid grid-cols-[50px_1fr] gap-2 bg-aqua-500 p-2">
            <div class="channel-picture">
              <img
                src={ProfilePic}
                alt=""
                class="w-10 rounded-full bg-pink-500"
              />
            </div>
            <div class="video-info">
              {/* <p class="mt-0 text-sm font-medium leading-5 mb-1">
                Talking with volleyball player USHA
              </p> */}
              {/* <Button>Add to Cart</Button> */}
              <Button className="w-full">Add to Cart</Button>
              {/* <p class="text-xs mb-1">Abash ghimire</p>
              <p class="text-xs">2.5M views 3 months ago</p> */}
            </div>
          </div>
        </div>

        {/* <!-- Each Grid --> */}
        <div class="video-preview">
          <div class="mb-3 bg-blue-500">
            <img src={Thumbnail2} alt="" class="w-full thumbnail" />
          </div>
          <div class="grid grid-cols-[50px_1fr] gap-2 bg-aqua-500 p-2">
            <div class="channel-picture">
              <img
                src={ProfilePic}
                alt=""
                class="w-10 rounded-full bg-pink-500"
              />
            </div>
            <div class="video-info">
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* <!-- Each Grid --> */}

        <div class="video-preview">
          <div class="mb-3 bg-blue-500">
            <img src={Thumbnail2} alt="" class="w-full thumbnail" />
          </div>
          <div class="grid grid-cols-[50px_1fr] gap-2 bg-aqua-500 p-2">
            <div class="channel-picture">
              <img
                src={ProfilePic}
                alt=""
                class="w-10 rounded-full bg-pink-500"
              />
            </div>
            <div class="video-info">
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* <!-- Each Grid --> */}

        <div class="video-preview">
          <div class="mb-3 bg-blue-500">
            <img src={Thumbnail2} alt="" class="w-full thumbnail" />
          </div>
          <div class="grid grid-cols-[50px_1fr] gap-2 bg-aqua-500 p-2">
            <div class="channel-picture">
              <img
                src={ProfilePic}
                alt=""
                class="w-10 rounded-full bg-pink-500"
              />
            </div>
            <div class="video-info">
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* <!-- Each Grid --> */}

        <div class="video-preview">
          <div class="mb-3 bg-blue-500">
            <img src={Thumbnail2} alt="" class="w-full thumbnail" />
          </div>
          <div class="grid grid-cols-[50px_1fr] gap-2 bg-aqua-500 p-2">
            <div class="channel-picture">
              <img
                src={ProfilePic}
                alt=""
                class="w-10 rounded-full bg-pink-500"
              />
            </div>
            <div class="video-info">
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* <!-- Each Grid --> */}

        <div class="video-preview">
          <div class="mb-3 bg-blue-500">
            <img src={Thumbnail2} alt="" class="w-full thumbnail" />
          </div>
          <div class="grid grid-cols-[50px_1fr] gap-2 bg-aqua-500 p-2">
            <div class="channel-picture">
              <img
                src={ProfilePic}
                alt=""
                class="w-10 rounded-full bg-pink-500"
              />
            </div>
            <div class="video-info">
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <EachBox />
  );
};
