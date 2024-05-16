interface ProductProps {
  params: {
    data: string[];
  };
}

export default function Product({ params }: ProductProps) {
  const [id, size, color] = params.data;

  return (
    <div>
      <p>Product: {id}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
    </div>
  );
}
