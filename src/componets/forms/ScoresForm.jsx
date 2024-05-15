import { useState } from "react";
import { useParams } from "react-router-dom";
function ScoresForm({ onSubmit }) {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    firstCA: 0,
    secondCA: 0,
    exam: 0,
    id: Number(id),
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const newValue = isNaN(value) ? value : parseInt(value, 10);
    setFormData({
      ...formData,
      [name]: newValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="firstCA"
          placeholder="First CA Score"
          required
          className="input"
          value={Number(formData.id)}
          onChange={handleChange}
          hidden
        />
        <input
          type="number"
          name="firstCA"
          placeholder="First CA Score"
          required
          className="input"
          value={formData.firstCA}
          onChange={handleChange}
        />
        <input
          type="number"
          name="secondCA"
          value={formData.secondCA}
          placeholder="First CA Score"
          required
          className="input"
          onChange={handleChange}
        />
        <input
          className="input"
          type="number"
          name="exam"
          placeholder="Exam Score"
          value={formData.exam}
          required
          onChange={handleChange}
        />
        <button type="submit" className="smallBtn">
          Submit Scores
        </button>
      </form>
    </div>
  );
}

export default ScoresForm;
