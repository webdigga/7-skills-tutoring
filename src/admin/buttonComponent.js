CMS.registerEditorComponent({
  id: "tick-list",
  label: "Tick List",
  fields: [
    {
      name: "title",
      label: "List Title",
      widget: "string",
    },
    {
      name: "items",
      label: "List Items",
      widget: "list",
      default: [],
      fields: [{ name: "item", label: "Item", widget: "string" }],
    },
  ],

  pattern: /^<ul class="tick-list" title="([^"]+)">([\s\S]*?)<\/ul>$/,

  // fromBlock: Convert HTML into plain text for CMS storage
  fromBlock: function (match) {
    const title = match[1]; // Extract the title
    const listItemsHTML = match[2]; // Extract the HTML content of the list items

    const items = [];
    const liRegex = /<li[^>]*>(.*?)<\/li>/gs; // Regex to match the content of each <li> tag

    let liMatch;
    while ((liMatch = liRegex.exec(listItemsHTML)) !== null) {
      // Extract the inner text (removing any inner HTML tags) from each <li> tag
      const itemText = liMatch[1].replace(/<[^>]+>/g, '').trim(); // Strip HTML tags
      items.push({ item: itemText });
    }

    return {
      title: title,
      items: items,
    };
  },

  // toBlock: Rebuild the HTML structure with the plain text data stored in the CMS
  toBlock: function (data) {
    const items = data.items
      .map((item) => `<li class="tick-item inline-flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e1f1fd" class="size-6">
          <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd"></path>
        </svg> 
        ${item.item}
      </li>`).join("\n");

    return `<ul class="tick-list p-0 list-none" title="${data.title}">\n${items}\n</ul>`;
  },

  // toPreview: Display a preview of how the data will look in the CMS editor
  toPreview: function (data) {
    return `<div class="tick-list">
              <h3>${data.title}</h3>
              <ul class="p-0 list-none">${data.items
                .map((item) => `<li class="inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#e1f1fd" class="size-6">
                      <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg> 
                    ${item.item}
                  </li>`).join("")}
              </ul>
            </div>`;
  },
});
