import { Component, ReactNode } from 'react';

// daftar skin yang tersedia
const skins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Definisikan tipe untuk state
interface SwitcherState {
    isSwitchActive: boolean;
    stylePath: string;
}

class Switcher extends Component<{}, SwitcherState> {
    constructor(props: {}) {
        super(props);

        // pastikan state dideklarasikan di sini
        this.state = {
            isSwitchActive: false,
            stylePath: '/assets/css/skin/skin-1.css',
        };

        // bind method jika perlu
        this.handleSwitchSkin = this.handleSwitchSkin.bind(this);
        this.handleSwitchToggle = this.handleSwitchToggle.bind(this);
    }

    componentDidMount(): void {
        const homepage2 = /\/home-2/i;

        if (homepage2.test(window.location.href)) {
            document.body.classList.add('footer-fixed');
        } else {
            document.body.classList.remove('footer-fixed');
        }

        // Set default skin path saat komponen dipasang
        this.setState({ stylePath: '/assets/css/skin/skin-1.css' });
    }

    handleSwitchToggle(): void {
        this.setState((prevState) => ({
            isSwitchActive: !prevState.isSwitchActive,
        }));
    }

    handleSwitchSkin(skinNumber: number): void {
        const newPath = `/assets/css/skin/skin-${skinNumber}.css`;
        this.setState({ stylePath: newPath });
    }

    render(): ReactNode {
        const { isSwitchActive, stylePath } = this.state;

        return (
            <>
                {/* Link dinamis untuk stylesheet */}
                <link rel="stylesheet" type="text/css" href={stylePath} />

                {/* Tombol toggle (kalau nanti mau dipakai untuk show/hide switcher) */}
                <button onClick={this.handleSwitchToggle}>
                    {isSwitchActive ? 'Close Switcher' : 'Open Switcher'}
                </button>

                {/* Daftar tombol skin (opsional) */}
                {isSwitchActive && (
                    <div className="skin-switcher">
                        {skins.map((num) => (
                            <button
                                key={num}
                                onClick={() => this.handleSwitchSkin(num)}
                            >
                                Skin {num}
                            </button>
                        ))}
                    </div>
                )}
            </>
        );
    }
}

export default Switcher;
