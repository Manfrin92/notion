export const initialContent = `<h1>The 7 Layers in a Network</h1>
<div class="layer">
    <h2 class="layer-title">Layer 1: Physical Layer</h2>
    <p>The Physical Layer is the lowest layer in the network stack and deals with the physical transmission of data
        bits over a communication channel. It defines the electrical, mechanical, and procedural aspects of the
        network interface, including cables, connectors, and signaling.</p>
</div>

<div class="layer">
    <h2 class="layer-title">Layer 2: Data Link Layer</h2>
    <p>The Data Link Layer provides reliable and error-free communication between adjacent network nodes. It
        encapsulates data into frames, adds physical addresses (MAC addresses) to the frames, and handles flow
        control and error detection. Ethernet and Wi-Fi are examples of data link layer protocols.</p>
</div>

<div class="layer">
    <h2 class="layer-title">Layer 3: Network Layer</h2>
    <p>The Network Layer handles the routing and forwarding of data packets across multiple networks. It provides
        logical addressing (IP addresses) to identify source and destination hosts and uses routing protocols to
        determine the best path for data transmission. The Internet Protocol (IP) is a key protocol in this layer.</p>
</div>

<div class="layer">
    <h2 class="layer-title">Layer 4: Transport Layer</h2>
    <p>The Transport Layer ensures reliable data delivery between end systems. It segments data received from the
        upper layers into smaller units (segments), manages the flow of segments, and provides error recovery and
        retransmission mechanisms. TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) operate in
        this layer.</p>
</div>

<div class="layer">
    <h2 class="layer-title">Layer 5: Session Layer</h2>
    <p>The Session Layer establishes, manages, and terminates communication sessions between applications running on
        different hosts. It provides mechanisms for session establishment, maintenance, and synchronization. Examples
        include NetBIOS and Remote Procedure Call (RPC) protocols.</p>
</div>

<div class="layer">
    <h2 class="layer-title">Layer 6: Presentation Layer</h2>
    <p>The Presentation Layer is responsible for data representation, encryption, and compression. It ensures that
        data exchanged between applications is in a format that the receiving application can understand. Examples of
        protocols in this layer include JPEG for image compression and SSL/TLS for secure communication.</p>
</div>

<div class="layer">
    <h2 class="layer-title">Layer 7: Application Layer</h2>
    <p>The Application Layer is the topmost layer and is responsible for providing network services directly to
        end-users. It includes protocols and applications for tasks such as email (SMTP), web browsing (HTTP), file
        transfer (FTP), and remote access (SSH). This layer interacts directly with software applications.</p>
</div>`;
