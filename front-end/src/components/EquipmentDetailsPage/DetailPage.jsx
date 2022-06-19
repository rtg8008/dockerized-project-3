import NavHome from "../ReusableComponents/NavHome";

function DetailPage() {

    return (
      <>
        <NavHome/>
        <img  alt = 'equipment'/>
      </>
    );
}

export default DetailPage;

/* EQUIPMENT VALUES AND TYPES
    table.increments();
    table.string('name', 256) // specifies type, field name, and limit (i.e. character limit)
    table.integer('subcategory_id');    
    table.foreign('subcategory_id').references('subcategory.id');
    table.string('caliber', 128);
    table.integer('max_range_meters');
    table.boolean('armored');
    table.string('country', 256);
    table.string('image', 1024);
*/