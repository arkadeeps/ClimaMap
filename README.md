# ClimaMap

**ClimaMap** is a web application that provides weather information based on user input or current geolocation. It utilizes the OpenWeatherMap API to fetch and display weather data, including temperature, humidity, wind speed, and more. The app also dynamically updates the background based on the current weather conditions.

## Features

- **Search by Location**: Enter a location to get weather information for that area.
- **Current Location**: Use the browser's geolocation feature to get weather information for your current location.
- **Dynamic Background**: The background image changes according to the current weather conditions.
- **Responsive Design**: The application adjusts its layout for different screen sizes.

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling of the application with responsive design.
- **JavaScript**: Fetching data from the OpenWeatherMap API and updating the UI.
- **OpenWeatherMap API**: Provides weather data.

## Files

- `index.html`: The main HTML file for the application.
- `css/style.css`: Contains the styling rules for the application.
- `js/config.js`: Stores configuration details such as API keys (make sure to include your own `API_KEY`).
- `js/script.js`: JavaScript code that handles user interactions and updates the UI based on API data.
- `assets/icons/`: Directory containing weather icons used in the application.
- `assets/background/`: Directory containing background images corresponding to different weather conditions.

## Setup

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Get an API Key**

    Sign up at [OpenWeatherMap](https://openweathermap.org/) to get an API key.

3. **Configure API Key**

    Add your API key to `js/config.js`:

    ```javascript
    const apiKey = 'YOUR_API_KEY_HERE';
    ```

4. **Run the Application**

    Open `index.html` in your web browser to view the application.

## Usage

- **Search by Location**: Enter a location name in the text input field and click the "Submit" button or press Enter to fetch the weather information.
- **Current Location**: Click the "Current Location" button to get the weather information for your current location.

## Contributing

Feel free to open issues and submit pull requests to contribute to the project. Please ensure your code adheres to the project's style guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- [Poppins Font](https://fonts.google.com/specimen/Poppins) for typography.
