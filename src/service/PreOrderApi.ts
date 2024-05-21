export default class PreOrderApi {
    public static async apiGetPreOrder (): Promise<MainProductInterface[]>{
        const response = await fetch('https://interview.com7.in/api/pre-order');
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        const dataInterface:MainProductInterface[] = data?.data?.main_product || [];
        return dataInterface;
    }
    public static async postPreOrder(id:Number) {
        let data = {
            id: id
        }
        const response = await fetch('https://interview.com7.in/api/pre-order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      
        const jsonData = await response.json();
        return jsonData;
      }
}
