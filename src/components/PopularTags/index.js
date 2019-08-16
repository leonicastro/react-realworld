import React, { useState, useEffect } from "react";

import "./styles.scss";

export default function PopularTags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const tags = [
      { id: 1, name: "butt" },
      { id: 2, name: "dragons" },
      { id: 3, name: "test" },
      { id: 4, name: "tags" },
      { id: 5, name: "as" },
      { id: 6, name: "coffee" },
      { id: 7, name: "animation" },
      { id: 8, name: "flowerscars" },
      { id: 9, name: "flowers" },
      { id: 10, name: "cars" },
      { id: 11, name: "bubabycarameltt" },
      { id: 12, name: "baby" },
      { id: 13, name: "caramel" },
      { id: 14, name: "babycaramel" },
      { id: 15, name: "moneyhappiness" },
      { id: 16, name: "money" },
      { id: 17, name: "happiness" },
      { id: 18, name: "cleanjapan" },
      { id: 19, name: "clean" },
      { id: 20, name: "japan" }
    ];
    setTags(tags);
  }, []);

  return (
    <div className="box-tags">
      <div className="title">Popular Tags</div>
      {tags.map(tag => (
        <div key={tag.id} className="tag">
          {tag.name}
        </div>
      ))}
    </div>
  );
}
