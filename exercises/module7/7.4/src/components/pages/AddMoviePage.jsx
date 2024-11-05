// components/pages/AddMoviePage.jsx
import React from "react";
import { useOutletContext } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { PlusOutlined, TagsOutlined, CalendarOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


const AddMoviePage = () => {
  const { addMovie } = useOutletContext(); 
  const navigate = useNavigate();

  // Handler pour la soumission du formulaire
  const onFinish = (values) => {
    // Créer un nouvel objet movie avec les valeurs du formulaire
    const newMovie = {
      ...values,
      releaseDate: values.releaseDate, // Assurez-vous que la date est au format souhaité
    };

    // Appeler la fonction addMovie avec le nouvel objet movie
    addMovie(newMovie);
    
    // Log des détails du movie (optionnel)
    console.log(newMovie);

    // Rediriger vers la page de liste des films
    navigate("/movie-list");
  };

  // Handler pour les erreurs de soumission du formulaire (optionnel)
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h1>Add a Movie</h1>
      <Form
        name="add_movie"
        layout="vertical" // Utilise un layout vertical pour aligner les labels au-dessus des inputs
        onFinish={onFinish} // Handler pour la soumission réussie
        onFinishFailed={onFinishFailed} // Handler pour la soumission échouée
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please input the title of the movie!' }]}
        >
          <Input 
            placeholder="Title" 
            prefix={<PlusOutlined />} // Icône devant le champ
          />
        </Form.Item>

        <Form.Item
          label="Genre"
          name="genre"
          rules={[{ required: true, message: 'Please input the genre of the movie!' }]}
        >
          <Input 
            placeholder="Genre" 
            prefix={<TagsOutlined />} // Icône devant le champ
          />
        </Form.Item>

        <Form.Item
          label="Release Date"
          name="releaseDate"
          rules={[{ required: true, message: 'Please select the release date!' }]}
        >
          <Input 
            type="date" 
            prefix={<CalendarOutlined />} // Icône devant le champ
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please input the description!' }]}
        >
          <Input.TextArea 
            placeholder="Description" 
            rows={4} 
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            Add Movie
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddMoviePage;
