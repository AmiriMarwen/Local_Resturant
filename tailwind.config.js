module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'



  theme: {
    extend: {
    	fontFamily: {
        'sans': ['Titillium Web', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },

      backgroundImage: theme => ({
        'cover': "url('/hero-cover.jpg')"        
        })

      
    },
  },





  variants: {
    extend: {},
  },
  plugins: [],
}
