fetch('https://script.google.com/macros/s/AKfycbyw-fLTp2KTh18KFzzVi0M_VZP2kQzsXjsovD7H9GhARXyzTUzI6bZkzbjWrnO_jq3l/exec')
  .then(response => response.json())
  .then(data => {
    // Atualize seu site com os dados
  });

  // Armazene os dados localmente por 1 hora
async function getData() {
  const cached = localStorage.getItem('sheetCache');
  if (cached && Date.now() - JSON.parse(cached).timestamp < 3600000) {
    return JSON.parse(cached).data;
  }
  
  const freshData = await fetchSheetData();
  localStorage.setItem('sheetCache', JSON.stringify({
    data: freshData,
    timestamp: Date.now()
  }));
  
  return freshData;
}