export const STORAGE_KEY = 'example-vue-project'

let initialState = {}

// Local storage sync state
if (localStorage.getItem(STORAGE_KEY)) {
  initialState = JSON.parse(localStorage.getItem(STORAGE_KEY))
} else {
  initialState = {
    auth: {
      isLoggedIn: false,
      accessToken: null,
      refreshToken: null
    },
    user: {
      name: null
    }
  }
}

// Other state (not synced in local storage)
initialState.appnav = {
  isShow: true,
  searchText: '',
  searchTimestamp: null
}

export const state = initialState
