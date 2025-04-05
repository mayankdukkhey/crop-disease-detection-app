from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
import os

app = Flask(__name__)
model = load_model("Tomato_ResNet50_model.h5")

@app.route('/')
def home():
    return "Hello, Flask!"

# Define your class names here in the same order used during training
class_names = ["Tomato Bacterial spot",
    "tomato canker",
    "Tomato Early blight",
    "Tomato healthy",
    "Tomato Late blight",
    "Tomato Leaf Mold",
    "Tomato Septoria leaf spot",
    "Tomato Spider mites Two spotted spider mite",
    "Tomato Target Spot",
    "Tomato Tomato mosaic virus"]  # ← customize

UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

IMG_SIZE = (224, 224)  # replace with your model's input size

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)

    # Preprocess the image
    img = image.load_img(filepath, target_size=IMG_SIZE)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = img_array / 255.0  # normalize if needed

    # Make prediction
    prediction = model.predict(img_array)
    predicted_index = np.argmax(prediction[0])
    predicted_label = class_names[predicted_index]
    confidence = float(np.max(prediction[0]))

    return jsonify({
        'predicted_class': predicted_label,
        'confidence': round(confidence * 100, 2)
    })
if __name__ == '__main__':
    app.run(debug=True)