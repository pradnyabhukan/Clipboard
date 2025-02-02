import "./TrackSnippets.css";
import image from '../images/image-computer.png'

export default function TrackSnippets() {
  return (
    <div class="track-snippets">
        <img class="computer" src={image} />
        <div class="parent">
            <div class="content">
                <h1 class="title">Quick Search</h1>
                <p class="text">Easily search your snippets by content, category, web address, application, and more.</p>
            </div>
            <div class="content">
                <h1 class="title">iCloud Sync</h1>
                <p class="text">Instantly saves and syncs snippets across all your devices.</p>
            </div>
            <div class="content">
                <h1 class="title">Complete History</h1>
                <p class="text">Retrieve any snippets from the first moment you started using the app.</p>
            </div>
        </div>
    </div>
  );
}
