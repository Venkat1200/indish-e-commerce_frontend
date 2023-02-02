import Upload from "./Upload";

export default function Homepage({ data }) {
  return (
    <div>
      <Upload />
      {data?.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <p> {item.description}</p>
        </div>
      ))}
    </div>
  );
}
