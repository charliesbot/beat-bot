import { connectModal } from "redux-modal";
import ShareNewPlaylistModal from "./ShareNewPlaylistModal";

export default connectModal({ name: "shareNewPlaylistModal" })(
  ShareNewPlaylistModal
);
