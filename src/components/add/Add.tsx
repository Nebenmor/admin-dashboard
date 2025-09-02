import type { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
interface Props {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = ({ slug, columns, setOpen }: Props) => {
  return (
    <div className="add">
      <div className="modal">
        <span className="close">X</span>
        <h1>Add new {slug}</h1>

        {columns.map((column) => (
          <div className="item" key={column.field}>
            <label>{column.headerName}</label>
            <input type={column.type} placeholder={column.field} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;
