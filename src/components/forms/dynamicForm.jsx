export function DynamicForm({ sectionKey, sectionConfig, resume, setResume }) {
  const { fields, repeatable } = sectionConfig;
  const data = resume[sectionKey];

  const updateSingleField = (name, value) => {
    setResume(prev => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        [name]: value
      }
    }));
  };

  const updateRepeatableField = (index, name, value) => {
    setResume(prev => ({
      ...prev,
      [sectionKey]: prev[sectionKey].map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    }));
  };

  const addItem = () => {
    setResume(prev => ({
      ...prev,
      [sectionKey]: [...prev[sectionKey], {}]
    }));
  };

  const deleteItem = (index) => {
    setResume(prev => ({
      ...prev,
      [sectionKey]: prev[sectionKey].filter((_, i) => i !== index)
    }));
  };

  return (
    <div>
      {repeatable ? (
        <>
          {data.map((item, index) => (
            <div key={index}>
              {fields.map(field => (
                <fieldset key={field.name}>
                  <label>{field.label}</label>
                  <input
                    value={item[field.name] || ""}
                    onChange={e =>
                      updateRepeatableField(index, field.name, e.target.value)
                    }
                  />
                  
                </fieldset>
              ))}
              <div className="dynamic-btn-div">
                <button type="button" className="del-btn" onClick={() => deleteItem(index)}>
                    Delete
                  </button>
          <button type="button" className="add-btn" onClick={addItem}>+Add</button>
              </div>
              
            </div>
          ))}
          
        </>
      ) : (
        fields.map(field => (
          <fieldset key={field.name}>
            <label>{field.label}</label>
            <input
              value={data?.[field.name] || ""}
              onChange={e =>
                updateSingleField(field.name, e.target.value)
              }
            />
          </fieldset>
        ))
      )}
    </div>
  );
}
