export default function KVM() {
  return (
    <section aria-label="KVM Article" className="py-6 px-4 md:py-12 lg:py-24 md:px-8">
      <article className="container mx-auto max-w-4xl">
        <header className="text-center space-y-4 md:space-y-6 lg:space-y-8 mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent leading-tight">
            Building a Virtual Lab with KVM: Converting Old Hardware into a VM Host
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-base-content/70 leading-relaxed max-w-2xl mx-auto">
            Turn your old computer into a powerful virtualization host using KVM (Kernel-based Virtual Machine) and Ubuntu. This guide walks you through setting up virtual machines with proper network bridging for LAN access.
          </p>
        </header>

        <div className="prose prose-base md:prose-lg max-w-none prose-headings:scroll-mt-20">
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Prerequisites</h2>
          <p className="mb-4">Before starting, ensure you have:</p>
          <ul className="space-y-2 list-disc list-inside mb-6">
            <li>An old computer with virtualization support (VT-x for Intel or AMD-V for AMD processors)</li>
            <li>Ubuntu Desktop ISO (20.04 LTS or newer recommended)</li>
            <li>Ubuntu Server ISO for virtual machines</li>
            <li>Physical ethernet connection</li>
            <li>At least 8GB RAM (16GB recommended)</li>
            <li>100GB+ available storage</li>
            <li>A network cable (essential for bridge networking)</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Part 1: Preparing the Host System</h2>
          <p className="mb-4">Let's start by installing Ubuntu on your old computer:</p>
          <ol className="space-y-2 list-decimal list-inside mb-4">
            <li>Download Ubuntu Desktop ISO from <a href="http://ubuntu.com/" className="text-primary hover:text-primary/80 underline">ubuntu.com</a></li>
            <li>Create a bootable USB using tools like Rufus or balenaEtcher</li>
            <li>Boot from USB and follow Ubuntu's installation process</li>
            <li>After installation, update the system:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code>sudo apt update && sudo apt upgrade -y</code></pre>

          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Part 2: Setting Up KVM and Virt-Manager</h2>
          <p className="mb-4">Install and configure KVM and Virt-Manager for VM management:</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Install required packages:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code>sudo apt install -y qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils virtinst virt-manager</code></pre>
          <ol start={2} className="space-y-2 list-decimal list-inside">
            <li>Add your user to the libvirt group:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code>sudo usermod -aG libvirt $USER
sudo usermod -aG kvm $USER</code></pre>
          <ol start={3} className="space-y-2 list-decimal list-inside">
            <li>Verify KVM installation:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code>virt-host-validate</code></pre>
          <ol start={4} className="space-y-2 list-decimal list-inside">
            <li>Start and enable libvirtd service:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code>sudo systemctl enable --now libvirtd</code></pre>

          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Part 3: Creating Virtual Machines</h2>
          <p className="mb-4">Create your virtual machines:</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Launch Virt-Manager:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code>virt-manager</code></pre>
          <ol start={2} className="space-y-2 list-decimal list-inside">
            <li className="mb-2">For each VM (create two VMs - one manager and one worker):</li>
          </ol>
          <div className="ml-6 space-y-2 mb-6">
            <ul className="list-disc list-inside space-y-2">
              <li>Click "Create New Virtual Machine"</li>
              <li>Choose "Local install media" and select Ubuntu Server ISO</li>
              <li>Configure VM resources:</li>
              <ul className="ml-6 list-disc list-inside space-y-1">
                <li>VM1: 2 CPU cores, 4GB RAM</li>
                <li>VM2: 2 CPU cores, 4GB RAM</li>
              </ul>
              <li>Create a disk (minimum 30GB each)</li>
              <li>During network setup, select default network for now</li>
              <li>Complete the Ubuntu Server installation process</li>
            </ul>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Part 4: Network Bridge Configuration</h2>
          <p className="mb-2">Reference: (<a href="https://www.spad.uk/posts/really-simple-network-bridging-with-qemu/" className="text-primary hover:text-primary/80 underline">Network Bridge Guide</a>)</p>
          <p className="mb-4">Set up bridge networking to make VMs accessible on your LAN:</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Identify your physical network interface:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-4"><code>ip addr show</code></pre>
          <p className="mb-4 italic">Note your physical ethernet interface name (e.g., enp3s0)</p>
          <ol start={2} className="space-y-2 list-decimal list-inside">
            <li>Create and configure the bridge:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code># Create the bridge interface
sudo brctl addbr virtbr0

# Add physical interface to the bridge
sudo brctl addif virtbr0 enp3s0

# Assign IP address to the bridge (adjust IP based on your network)
sudo ip addr add 192.168.0.20/24 dev virtbr0

# Bring the bridge interface up
sudo ip link set virtbr0 up</code></pre>

          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Part 5: Verifying Setup</h2>
          <p className="mb-4">Confirm your network configuration is working:</p>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Start both VMs and verify network connectivity:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code>ping &lt;vm1-ip&gt;
ping &lt;vm2-ip&gt;</code></pre>
          <ol start={2} className="space-y-2 list-decimal list-inside">
            <li>Test internet connectivity from VMs:</li>
          </ol>
          <pre className="bg-base-200 p-4 rounded-lg overflow-x-auto mb-6"><code># From each VM
ping 8.8.8.8
ping &lt;other-vm-ip&gt;</code></pre>

          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Troubleshooting Tips</h2>
          <p className="mb-4">If you encounter issues:</p>
          <ul className="space-y-2 list-disc list-inside mb-6">
            <li>Verify ethernet cable is properly connected</li>
            <li>Check /var/log/syslog for networking issues</li>
            <li>Ensure BIOS/UEFI has virtualization enabled</li>
            <li>Confirm VM resources aren't overcommitted</li>
            <li>Check bridge interface status with brctl show</li>
            <li>Verify IP configurations with ip addr show</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">Resources</h2>
          <ul className="space-y-2 list-disc list-inside">
            <li><a href="https://www.linux-kvm.org/page/Documents" className="text-primary hover:text-primary/80 underline">KVM Documentation</a></li>
            <li><a href="https://ubuntu.com/server/docs" className="text-primary hover:text-primary/80 underline">Ubuntu Server Guide</a></li>
            <li><a href="https://libvirt.org/docs.html" className="text-primary hover:text-primary/80 underline">Libvirt Documentation</a></li>
            <li><a href="https://www.spad.uk/posts/really-simple-network-bridging-with-qemu/" className="text-primary hover:text-primary/80 underline">Bridge Setup Guide</a></li>
          </ul>
        </div>
      </article>
    </section>
  )
}