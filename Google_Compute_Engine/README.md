# Google Compute Engine (GCE) Setup Guide

This guide will walk you through the process of setting up and using Google Compute Engine (GCE) on Google Cloud Platform using the graphical user interface (GUI).

![Google Cloud Console Home](Compute_Engine_Screenshots/Screenshot(154).png)
*Figure 1: Google Cloud Console Home Page*

## Prerequisites

1. A Google Cloud Platform account
2. A web browser (Chrome, Firefox, or Edge recommended)
3. A project created in Google Cloud Console

## Step-by-Step Guide

### 1. Access Google Cloud Console

1. Open your web browser and go to [Google Cloud Console](https://console.cloud.google.com/)
2. Sign in with your Google account
3. Select your project from the project dropdown menu at the top of the page

![Project Selection](Compute_Engine_Screenshots/Screenshot(155).png)
*Figure 2: Project Selection in Google Cloud Console*

### 2. Enable Compute Engine API

1. Click on the Navigation Menu (☰) in the top-left corner
2. Go to "APIs & Services" > "Library"
3. In the search bar, type "Compute Engine API"
4. Click on "Compute Engine API" in the results
5. Click the "ENABLE" button if it's not already enabled

![Enable Compute Engine API](Compute_Engine_Screenshots/Screenshot(156).png)
*Figure 3: Enabling Compute Engine API*

### 3. Create a Virtual Machine Instance

1. Click on the Navigation Menu (☰) > "Compute Engine" > "VM instances"
2. Click the "CREATE INSTANCE" button at the top
3. Fill in the instance details:
   - **Name**: Enter a unique name for your instance
   - **Region**: Select your preferred region (e.g., us-central1)
   - **Zone**: Choose a zone within your selected region
   - **Machine type**: Select based on your needs:
     - e2-micro (free tier eligible)
     - e2-small
     - e2-medium
     - etc.
   - **Boot disk**: Click "CHANGE" and select:
     - Operating system (e.g., Ubuntu)
     - Version (e.g., Ubuntu 20.04 LTS)
     - Boot disk type (Standard or SSD)
     - Size (default is 10GB)
   - **Identity and API access**: Select appropriate service account
   - **Firewall**: Check "Allow HTTP traffic" and "Allow HTTPS traffic" if needed
4. Click "CREATE" at the bottom

![Create VM Instance](Compute_Engine_Screenshots/Screenshot(157).png)
*Figure 4: Creating a New VM Instance*

### 4. Connect to Your VM

#### Method 1: Using Browser-based SSH (Easiest)

1. In the VM instances list, find your instance
2. Click the "SSH" button in the "Connect" column
3. A new browser window will open with the SSH connection
4. You're now connected to your VM!

![SSH Connection](Compute_Engine_Screenshots/Screenshot(158).png)
*Figure 5: SSH Connection Window*

#### Method 2: Using External SSH Client (Advanced)

1. **Generate SSH Key**:
   - Click on the "SSH" button next to your instance
   - Click "View gcloud command"
   - Copy the command shown

2. **Using PuTTY (Windows)**:
   - Download and install PuTTY from [putty.org](https://www.putty.org/)
   - Open PuTTY
   - Enter your instance's external IP address
   - Go to Connection > SSH > Auth
   - Browse and select your private key file
   - Click "Open"

3. **Using Terminal (Mac/Linux)**:
   - Open Terminal
   - Use the command:
     ```bash
     gcloud compute ssh [INSTANCE_NAME] --zone=[ZONE]
     ```

### 5. Managing Your VM Through GUI

#### Start/Stop VM:
1. Go to VM instances list
2. Select your instance
3. Click the "START" or "STOP" button at the top

![VM Management](Compute_Engine_Screenshots/Screenshot(159).png)
*Figure 6: VM Instance Management Options*

#### Delete VM:
1. Go to VM instances list
2. Select your instance
3. Click the "DELETE" button at the top
4. Confirm deletion

#### Monitor VM:
1. Click on your instance name in the list
2. View details including:
   - CPU usage
   - Memory usage
   - Disk usage
   - Network traffic

![VM Monitoring](Compute_Engine_Screenshots/Screenshot(160).png)
*Figure 7: VM Instance Monitoring Dashboard*

#### Network Configuration:
1. Access network settings through the VM instance details
2. Configure firewall rules and network tags
3. Set up load balancing if needed

![Network Configuration](Compute_Engine_Screenshots/Screenshot(161).png)
*Figure 8: Network Configuration Settings*

#### Storage Management:
1. View and manage attached disks
2. Create snapshots for backup
3. Configure persistent disks

![Storage Management](Compute_Engine_Screenshots/Screenshot(162).png)
*Figure 9: Storage Management Options*

#### Security Settings:
1. Configure IAM roles and permissions
2. Set up service accounts
3. Manage SSH keys

![Security Settings](Compute_Engine_Screenshots/Screenshot(163).png)
*Figure 10: Security and IAM Configuration*

#### Billing and Cost Management:
1. Monitor resource usage
2. Set up billing alerts
3. View cost breakdown

![Billing Dashboard](Compute_Engine_Screenshots/Screenshot(164).png)
*Figure 11: Billing and Cost Management Dashboard*

### 6. Best Practices

1. **Cost Management**:
   - Stop instances when not in use
   - Use preemptible instances for non-critical workloads
   - Monitor your billing regularly in the Billing section

2. **Security**:
   - Use firewall rules to restrict access
   - Keep your OS and software updated
   - Use service accounts with minimal required permissions

3. **Performance**:
   - Choose appropriate machine types
   - Use SSD persistent disks for better performance
   - Monitor resource usage through the GUI

## Troubleshooting

Common issues and solutions:

1. **SSH Connection Issues**:
   - Check if the instance is running
   - Verify firewall rules in VPC network settings
   - Ensure you have the correct permissions
   - Try using the browser-based SSH as a fallback

2. **Performance Issues**:
   - Monitor CPU and memory usage in the instance details
   - Check disk I/O in the monitoring section
   - Consider upgrading machine type

3. **Cost Issues**:
   - Review billing reports in the Billing section
   - Check for unused resources
   - Consider using committed use discounts

## Additional Resources

- [Google Cloud Documentation](https://cloud.google.com/compute/docs)
- [Compute Engine Pricing](https://cloud.google.com/compute/pricing)
- [Best Practices](https://cloud.google.com/compute/docs/best-practices)

## Support

For additional support:
- Visit [Google Cloud Support](https://cloud.google.com/support)
- Check the [Compute Engine FAQ](https://cloud.google.com/compute/docs/faq)
- Use the [Google Cloud Community](https://cloud.google.com/community) 