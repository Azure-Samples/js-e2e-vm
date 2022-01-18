# Create Linux virtual machine resource

1. Create resource. The keys will be stored in the ~/.ssh directory.

    ```azurecli
    az vm create \
      --resource-group rg-demo-vm-eastus \
      --name demo-vm \
      --location eastus \
      --image UbuntuLTS \
      --admin-username azureuser \
      --generate-ssh-keys \
      --custom-data cloud-init-github.txt
    ```

1. Open port for virtual machine

    ```azurecli
    az vm open-port \
      --port 80 \
      --resource-group rg-demo-vm-eastus \
      --name demo-vm    
    ```

1. Get IP address for virtual machine

    ```azurecli
    az vm list-ip-addresses \
        --name YOUR-RESOURCE-NAME \
        --resource-group rg-demo-vm-eastus 
    ```

    ```json
    [
       {
        "virtualMachine": {
          "name": "demo-vm",
          "network": {
            "privateIpAddresses": [
              "YOUR-PRIVATE-IP"
            ],
            "publicIpAddresses": [
              {
                "id": "/subscriptions/YOUR-SUBSCRIPTION-ID/resourceGroups/YOUR-RESOURCE-GROUP-NAME/providers/Microsoft.Network/publicIPAddresses/YOUR-RESOURCE-NAME-ip",
                "ipAddress": "YOUR-PUBLIC-IP",
                "ipAllocationMethod": "Static",
                "name": "YOUR-RESOURCE-NAME-ip",
                "resourceGroup": "YOUR-RESOURCE-GROUP-NAME",
                "zone": "1"
              }
            ]
          },
          "resourceGroup": "YOUR-RESOURCE-GROUP-NAME"
        }
      }
    ]    
    ```