export const SearchBar = ({ heading, label }) => {
  return (
    <>
      <h2>{heading}</h2>
      <input type="search" placeholder={label} />
    </>
  );
};
