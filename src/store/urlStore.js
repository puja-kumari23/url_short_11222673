import { create } from "zustand";

const useUrlStore = create((set) => ({
  urls: [],
  addUrl: (urlData) =>
    set((state) => ({
      urls: [...state.urls, urlData],
    })),
  updateClick: (shortcode, clickData) =>
    set((state) => ({
      urls: state.urls.map((url) =>
        url.shortcode === shortcode
          ? { ...url, clicks: [...(url.clicks || []), clickData] }
          : url
      ),
    })),
}));

export default useUrlStore;
