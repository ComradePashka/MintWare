import * as anchor from '@coral-xyz/anchor';
import { BN, Program } from '@coral-xyz/anchor';
import { Keypair, PublicKey } from '@solana/web3.js';
import { Mintware } from '../target/types/mintware';
import { DEV_USDCOIN_MINT, getProjectATA, getProjectPDA, MINT_WARE_PROGRAM_ID, POOL_PDA_SEED, settingsPDA } from '../src';
import { bs58 } from '@coral-xyz/anchor/dist/cjs/utils/bytes';
import { TOKEN_PROGRAM_ID } from '@coral-xyz/anchor/dist/cjs/utils/token';
import { getAssociatedTokenAddressSync} from '@solana/spl-token';


describe('mint-ware', () => {
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;
  const program = anchor.workspace.Mintware as Program<Mintware>;
  
  const mintWareKeypair = Keypair.fromSecretKey(bs58.decode(process.env.DEV_SECRET || ''))
  const projectPDA = getProjectPDA(mintWareKeypair.publicKey, DEV_USDCOIN_MINT)
  const projectATA = getProjectATA(mintWareKeypair.publicKey, DEV_USDCOIN_MINT)
  const senderATA = getAssociatedTokenAddressSync(DEV_USDCOIN_MINT, mintWareKeypair.publicKey)

  console.log('Main User KEY: ', mintWareKeypair.publicKey.toBase58())
  console.log('MW Settings PDA: ', settingsPDA.toBase58())
  console.log('MW Project PDA: ', projectPDA.toBase58())
  console.log('MW Project ATA: ', projectATA.toBase58())

  it('Initialize MintWare', async () => {
    let tx, result
    try {
      tx = program.methods
      .projectInit("Test", "Description", 5, new BN(10))
      .accountsPartial({
        project: projectPDA,
        settings: settingsPDA,
        poolAta: projectATA,
        tokenMint: DEV_USDCOIN_MINT,
        signerAta: senderATA,
        signer: mintWareKeypair.publicKey,
        // systemProgram: '',
        // tokenProgram: ''
      }
      )
      .signers([mintWareKeypair])
      console.log("TX READY~~~:", tx)
      result = await tx.rpc();
    } catch (e) {
      console.log("GODDAMNIT!!!!", e)
    }

    console.log("RESULT: ", result)

    const newProject = await program.account.project.fetch(
      mintWareKeypair.publicKey
    );

    console.log("NEW PROJECT PDA DATA:", newProject)

    expect(newProject.rewardPercent).toEqual(5);
  });

  // it('Increment MintWare', async () => {
  //   await program.methods
  //     .increment()
  //     .accounts({ mintWare: mintWareKeypair.publicKey })
  //     .rpc();

  //   const currentCount = await program.account.mintWare.fetch(
  //     mintWareKeypair.publicKey
  //   );

  //   expect(currentCount.count).toEqual(1);
  // });

  // it('Increment MintWare Again', async () => {
  //   await program.methods
  //     .increment()
  //     .accounts({ mintWare: mintWareKeypair.publicKey })
  //     .rpc();

  //   const currentCount = await program.account.mintWare.fetch(
  //     mintWareKeypair.publicKey
  //   );

  //   expect(currentCount.count).toEqual(2);
  // });

  // it('Decrement MintWare', async () => {
  //   await program.methods
  //     .decrement()
  //     .accounts({ mintWare: mintWareKeypair.publicKey })
  //     .rpc();

  //   const currentCount = await program.account.mintWare.fetch(
  //     mintWareKeypair.publicKey
  //   );

  //   expect(currentCount.count).toEqual(1);
  // });

  // it('Set mintWare value', async () => {
  //   await program.methods
  //     .set(42)
  //     .accounts({ mintWare: mintWareKeypair.publicKey })
  //     .rpc();

  //   const currentCount = await program.account.mintWare.fetch(
  //     mintWareKeypair.publicKey
  //   );

  //   expect(currentCount.count).toEqual(42);
  // });

  // it('Set close the mintWare account', async () => {
  //   await program.methods
  //     .close()
  //     .accounts({
  //       payer: payer.publicKey,
  //       mintWare: mintWareKeypair.publicKey,
  //     })
  //     .rpc();

  //   // The account should no longer exist, returning null.
  //   const userAccount = await program.account.mintWare.fetchNullable(
  //     mintWareKeypair.publicKey
  //   );
  //   expect(userAccount).toBeNull();
  // });
});


