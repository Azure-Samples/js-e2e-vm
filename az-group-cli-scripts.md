# Create resource group

1. Create a resource group before you create your resources.

    ```azurecli
    az group create \
        --location eastus \
        --name rg-demo-vm-eastus
    ```

1. When you are done using your resources, delete your resource group to remove all resources.

    ```azurecli
    az group delete --name rg-demo-vm-eastus -y
    ```